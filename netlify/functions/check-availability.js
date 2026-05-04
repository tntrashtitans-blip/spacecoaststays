const https = require("https");
const http  = require("http");

function fetchUrl(url, redirects = 5) {
  return new Promise((resolve, reject) => {
    if (redirects === 0) return reject(new Error("Too many redirects"));
    const lib  = url.startsWith("https") ? https : http;
    const opts = { headers: { "User-Agent": "SpaceCoastStays/1.0 CalendarSync" } };
    lib.get(url, opts, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location, redirects - 1));
      }
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

function parseIcal(text) {
  const events = [];
  const lines = text.replace(/\r\n|\r/g, "\n").split("\n");
  let ev = null;
  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      ev = {};
    } else if (line === "END:VEVENT") {
      if (ev && ev.start && ev.end) events.push(ev);
      ev = null;
    } else if (ev) {
      if (line.startsWith("DTSTART")) ev.start = toDate(line.split(":").pop());
      if (line.startsWith("DTEND"))   ev.end   = toDate(line.split(":").pop());
    }
  }
  return events;
}

function toDate(str) {
  const s = str.trim().replace(/T.*/, "");
  return new Date(`${s.slice(0,4)}-${s.slice(4,6)}-${s.slice(6,8)}T00:00:00Z`);
}

function isAvailable(events, checkIn, checkOut) {
  const start = new Date(checkIn + "T00:00:00Z");
  const end   = new Date(checkOut + "T00:00:00Z");
  return !events.some((ev) => ev.start < end && ev.end > start);
}

const CALENDARS = {
  "312": {
    env: "ICAL_SANDCASTLES_312",
    label: "Sandcastles 312",
  },
  "19854968": {
    env: "ICAL_AIRBNB_19854968",
    label: "Corner Direct Oceanfront — Wrap-Around Balcony",
  },
};

exports.handler = async ({ queryStringParameters }) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const { checkIn, checkOut, listing = "312" } = queryStringParameters || {};
  if (!checkIn || !checkOut) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing checkIn or checkOut" }) };
  }

  const calendar = CALENDARS[listing];
  if (!calendar) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Unknown listing" }) };
  }

  const icalUrl = process.env[calendar.env];
  if (!icalUrl) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "iCal URL not configured" }) };
  }

  try {
    const text = await fetchUrl(icalUrl);
    const events = parseIcal(text);
    const available = isAvailable(events, checkIn, checkOut);

    // Show which events are blocking the requested range (helpful for debugging)
    const s = new Date(checkIn  + "T00:00:00Z");
    const e = new Date(checkOut + "T00:00:00Z");
    const blocking = events
      .filter((ev) => ev.start < e && ev.end > s)
      .map((ev) => ({
        start: ev.start.toISOString().slice(0, 10),
        end:   ev.end.toISOString().slice(0, 10),
      }));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ available, listing: calendar.label, key: listing, checkIn, checkOut, blocking }),
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
