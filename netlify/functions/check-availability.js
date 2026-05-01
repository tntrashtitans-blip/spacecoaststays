const https = require("https");

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
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

exports.handler = async ({ queryStringParameters }) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const { checkIn, checkOut } = queryStringParameters || {};
  if (!checkIn || !checkOut) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Missing checkIn or checkOut" }) };
  }

  const icalUrl = process.env.ICAL_SANDCASTLES_312;
  if (!icalUrl) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: "iCal URL not configured" }) };
  }

  try {
    const text = await fetchUrl(icalUrl);
    const events = parseIcal(text);
    const available = isAvailable(events, checkIn, checkOut);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ available, listing: "Sandcastles 312", checkIn, checkOut }),
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
