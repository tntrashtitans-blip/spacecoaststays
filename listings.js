// SpaceCoastStays — Sandcastles Condominiums listing data
// 1000 N Atlantic Ave, Cocoa Beach FL
// Real listings sourced from Airbnb & VRBO research — April 2025

// ── Date & availability state ────────────────────────────────────────────────
let dates = { checkIn: null, checkOut: null };
let currentFilter = "all";
// keyed by unit number string — values: "checking" | "available" | "unavailable" | null
let unitAvailability = {};

const LISTINGS = [

  // ── FLOOR 1 ────────────────────────────────────────────────────────────────
  {
    unit: "104",
    floor: 1,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Steps to Ocean! Sandcastles 104",
    desc: "Ground-floor convenience right on the beach. No stairs, direct beach access, resort-style pool and hot tub — perfect for families looking for an easy, relaxing stay.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/659336589864549620" }
    ],
    photo: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-659336589864549620/original/027d2bbc-820f-4e31-95be-3c3d7c513acc.png",
  },

  // ── FLOOR 2 ────────────────────────────────────────────────────────────────
  {
    unit: "216",
    floor: 2,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Two Balconies — Ocean View & Sunsets",
    desc: "Sandcastles #216 has two balconies: a south-facing one with side ocean views and a west-facing one for spectacular Banana River sunsets. Book on whichever platform works best.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/30351808" },
      { name: "vrbo",   url: "https://www.vrbo.com/622918" }
    ],
    photo: "https://a0.muscache.com/im/pictures/miso/Hosting-30351808/original/2585a64b-84aa-4166-9e05-a3740034ad99.jpeg",
  },
  {
    unit: null,
    floor: 2,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Beach Tranquility — 2nd Floor Ocean View",
    desc: "South-facing second-floor condo with a roomy balcony for catching sunrises. Pet-free, smoke-free, and steps from the heated pool with all the comforts of home.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/32041458" }
    ],
    photo: "https://a0.muscache.com/im/pictures/7d0031e6-c3ea-4653-b145-09a3d3c466fd.jpg",
  },

  // ── FLOOR 3 ────────────────────────────────────────────────────────────────
  {
    unit: "303",
    floor: 3,
    view: "pool-view",
    beds: 2,
    baths: 2,
    title: "Beach Life at Sandcastles 303",
    desc: "Well-appointed 2BR/2BA with a king bed in the master, fully equipped kitchen, in-unit washer/dryer, and easy access to the beach, pool, and tennis courts.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/765207674629970988" }
    ],
    photo: "https://a0.muscache.com/im/pictures/miso/Hosting-765207674629970988/original/e426cdb1-e8e7-44bc-b7aa-139c41c285a1.jpeg",
  },
  {
    unit: "312",
    floor: 3,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "5-Star Ocean View Condo | Dog-Friendly",
    desc: "Perfect-rated Cocoa Beach getaway with ocean views, a private balcony, and all beach gear included. Dog-friendly (under 30 lbs), steps from the sand, superhost service.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/1066137435990680028" }
    ],
    photo: "https://a0.muscache.com/im/pictures/miso/Hosting-1066137435990680028/original/e5a058d5-79f8-4540-8daf-86ea555803ea.jpeg",
  },

  // ── FLOOR 4 ────────────────────────────────────────────────────────────────
  {
    unit: "403",
    floor: 4,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Happy Palm Stays — Coastal Condo 403",
    desc: "Managed by Happy Palm Stays, Unit 403 is a spacious north-facing 4th-floor unit with ocean views, walk-in master closet, in-unit washer/dryer, and beach gear included.",
    platforms: [
      { name: "vrbo", url: "https://www.vrbo.com/9714032ha" }
    ],
    photo: "https://media.vrbo.com/lodging/84000000/83410000/83405600/83405508/2deb60a0.jpg",
  },
  {
    unit: null,
    floor: 4,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Sandcastles Direct Oceanfront — 4th Floor",
    desc: "Fourth-floor direct oceanfront condo with spectacular Atlantic views from the moment you walk in. Updated kitchen, remodeled bathrooms, and a balcony made for beach gazing.",
    platforms: [
      { name: "vrbo", url: "https://www.vrbo.com/7017430ha" }
    ],
    photo: "https://media.vrbo.com/lodging/34000000/33550000/33545900/33545820/5a359a4f.jpg",
  },

  // ── FLOOR 5 ────────────────────────────────────────────────────────────────
  {
    unit: "510",
    floor: 5,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Sandcastles 510 — Gorgeous Ocean View",
    desc: "Fifth-floor condo with gorgeous ocean views and a private balcony. Resort amenities, easy beach access, and an ideal perch for watching rocket launches arc across the sky.",
    platforms: [
      { name: "vrbo", url: "https://www.vrbo.com/7120752ha" }
    ],
    photo: "https://media.vrbo.com/lodging/35000000/34100000/34097000/34096988/33019497.jpg",
  },
  {
    unit: null,
    floor: 5,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "5th Floor Direct Oceanfront — Remodeled",
    desc: "Fifth-floor direct oceanfront unit with unobstructed Atlantic views year-round. Granite kitchen, king bed, new appliances, and a balcony bistro table for your morning coffee.",
    platforms: [
      { name: "vrbo", url: "https://www.vrbo.com/1993285" }
    ],
    photo: "https://media.vrbo.com/lodging/54000000/53970000/53961000/53960925/91a0ca75.jpg",
  },

  // ── FLOOR 6 ────────────────────────────────────────────────────────────────
  {
    unit: "606",
    floor: 6,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Oceanfront Oasis — 6th Floor Direct Views",
    desc: "Breathtaking direct oceanfront views from the 6th floor. Watch endless sunrises from the living room or private balcony. Updated kitchen, king bed, superhost rated.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/1377600827057414395" }
    ],
    photo: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1377600827057414395/original/639f9ca7-ad9e-4ad4-9952-f3ad382cdb61.jpeg",
  },
  {
    unit: "614",
    floor: 6,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Sandcastles 614 — Tropical Ocean View",
    desc: "Sixth-floor unit with gorgeous side ocean views and a sunny south-facing balcony. Tropical Palm décor, new tile floors and fixtures, in-unit laundry, 108 five-star reviews.",
    platforms: [
      { name: "vrbo", url: "https://www.vrbo.com/1167578" }
    ],
    photo: "https://media.vrbo.com/lodging/35000000/34080000/34076200/34076120/3fb05c0a.jpg",
  },

  // ── FLOOR 7 ────────────────────────────────────────────────────────────────
  {
    unit: null,
    floor: 7,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Top Floor — Direct Ocean & Heated Pool",
    desc: "Top-floor unit with direct oceanfront views and a private balcony perfect for rocket launch watching. Steps to the sand, heated pool and hot tub, managed by a longtime local host.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/44590023" }
    ],
    photo: "https://a0.muscache.com/im/pictures/e710b442-3dc4-48e8-884f-944e2a9226b3.jpg",
  },

  // ── OCEANFRONT (floor unlisted) ────────────────────────────────────────────
  {
    unit: null,
    floor: null,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Best Ocean View — Newly Renovated",
    desc: "Spacious (~1,300 sq ft) direct oceanfront unit with expansive beach views from the living room, kitchen, and master bedroom. King bed, two full beds, heated pool, top-1% rated.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/587677510430864991" }
    ],
    photo: "https://a0.muscache.com/im/pictures/miso/Hosting-587677510430864991/original/64021ea6-aca6-4571-8057-f9ca8f311bd3.jpeg",
  },
  {
    unit: null,
    floor: null,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Corner Direct Oceanfront — Wrap-Around Balcony",
    desc: "Beautiful frontal ocean view with a 42-foot wrap-around balcony. Newly updated furniture, seats 8 comfortably, king bed in master, and a full beach closet stocked for your stay.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/19854968" }
    ],
    photo: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTk4NTQ5Njg%3D/original/347aec30-d479-48c3-a306-a458c21ec568.jpeg",
  },
  {
    unit: null,
    floor: null,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Direct Oceanfront — Spacious & Modern",
    desc: "Direct ocean views with a large private balcony. King bed in master, washer/dryer in unit, beach gear included, Smart TV, and easy access to the heated pool and hot tub.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/728944430026918864" }
    ],
    photo: "https://a0.muscache.com/im/pictures/miso/Hosting-728944430026918864/original/61aedd24-6a37-4b48-b7ce-db8a07baf0db.jpeg",
  },
  {
    unit: null,
    floor: null,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Beachside Dream at Sandcastles",
    desc: "Stunning direct oceanfront condo with Atlantic views and private beach access steps from the patio. Coastal décor, Smart TV, in-unit washer/dryer, communal pool and hot tub.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/937690582144870987" }
    ],
    photo: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-937690582144870987/original/9fac3c67-f2f0-4ab9-a2cb-abf4e1fbda0d.jpeg",
  },
  {
    unit: null,
    floor: null,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Upscale Direct Oceanfront — Luxury Sun & Fun",
    desc: "Premium oceanfront condo with Italian tile floors, nautical décor, and a furnished balcony bistro table. Pet-friendly (1 dog under 30 lbs), beach bikes included, year-round heated pool.",
    platforms: [
      { name: "vrbo", url: "https://www.vrbo.com/296240" }
    ],
    photo: "https://media.vrbo.com/lodging/35000000/34330000/34329700/34329669/bdde75ce.jpg",
  },

  // ── OCEAN VIEW (floor unlisted) ─────────────────────────────────────────────
  {
    unit: null,
    floor: null,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Oceanfront Complex — Pool, Hot Tub & Views",
    desc: "Bright, modern condo with private balcony and gorgeous side ocean view. Remodeled en-suite bath with rain shower, Smart TV, high-speed Wi-Fi, and all beach gear included.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/934157971631186406" }
    ],
    photo: "https://a0.muscache.com/im/pictures/miso/Hosting-934157971631186406/original/7e44b1ad-1223-4d82-b71e-550a8a2d38e0.jpeg",
  },
  {
    unit: null,
    floor: null,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "2BR Condo — Side Ocean View",
    desc: "Spacious 2BR/2BA with side ocean views from the balcony. Watch the sunrise with your morning coffee, in-unit laundry, cable TV, high-speed internet, and free parking.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/1085025749289849737" }
    ],
    photo: "https://a0.muscache.com/im/pictures/miso/Hosting-1085025749289849737/original/9180251f-f71b-4e9c-b9b6-a583d5d19316.jpeg",
  },
  {
    unit: null,
    floor: null,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Ocean View Steps from the Beach",
    desc: "Sandcastles condo with unbeatable beach and pool access, minutes from the Cocoa Beach Pier. Wake to waves, relax poolside, and explore everything the Space Coast has to offer.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/1344561008303459786" }
    ],
    photo: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1344561008303459786/original/74030e5d-af93-4852-a32a-a2e3f0a159d4.jpeg",
  },
  {
    unit: null,
    floor: null,
    view: "ocean-view",
    beds: 3,
    baths: 2,
    title: "3BR/2BA — Huge Balcony, Ocean View & Garage",
    desc: "Over 1,600 sq ft with a massive balcony and ocean views. Three bedrooms, private garage spot, washer/dryer, Playstation 4, record player, and a Ms. Pac-Man arcade — for real.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/1487947670862624545" }
    ],
    photo: "https://a0.muscache.com/im/pictures/hosting/Hosting-1487947670862624545/original/659705c8-f7b8-401a-a9b6-dcf6741399eb.jpeg",
  },

];

// ── View label map ──────────────────────────────────────────────────────────
const VIEW_LABELS = {
  "oceanfront":  "Oceanfront",
  "ocean-view":  "Ocean View",
  "pool-view":   "Pool View",
};

// ── Build a single listing card ─────────────────────────────────────────────
function buildCard(listing) {
  const viewClass = `card__view-badge--${listing.view}`;
  const viewLabel = VIEW_LABELS[listing.view];

  // Unit / floor display line
  const parts = [];
  if (listing.unit)  parts.push(`Unit ${listing.unit}`);
  if (listing.floor) parts.push(`Floor ${listing.floor}`);
  const unitLine = parts.length ? parts.join(" · ") : "Sandcastles";

  // Platform badge
  const isDual = listing.platforms.length > 1;
  const primaryName = listing.platforms[0].name;
  const platformLabel = isDual ? "Airbnb + VRBO" : (primaryName === "airbnb" ? "Airbnb" : "VRBO");
  const platformClass = isDual ? "card__platform--both" : `card__platform--${primaryName}`;

  // Availability badge for units with live calendar checking
  const avail = listing.unit ? unitAvailability[listing.unit] : null;
  let availBadge = "";
  if (avail === "checking") {
    availBadge = `<span class="card__avail card__avail--checking">Checking calendar…</span>`;
  } else if (avail === "available") {
    availBadge = `<span class="card__avail card__avail--yes">✓ Available for your dates</span>`;
  } else if (avail === "unavailable") {
    availBadge = `<span class="card__avail card__avail--no">✗ Not available for these dates</span>`;
  }

  // Booking button(s)
  let buttonsHtml;
  if (isDual) {
    buttonsHtml = `<div class="card__links-split">${listing.platforms.map(p =>
      `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="card__link card__link--${p.name}">${p.name === "airbnb" ? "Airbnb ↗" : "VRBO ↗"}</a>`
    ).join("")}</div>`;
  } else {
    const label = primaryName === "airbnb" ? "Book on Airbnb ↗" : "Book on VRBO ↗";
    buttonsHtml = `<a href="${listing.platforms[0].url}" target="_blank" rel="noopener noreferrer" class="card__link card__link--${primaryName}">${label}</a>`;
  }

  return `
    <article class="listing-card" data-view="${listing.view}" data-platforms="${listing.platforms.map(p => p.name).join(" ")}">
      <div class="card__image">
        <img src="${listing.photo}" alt="${listing.title}" loading="lazy" />
        <span class="card__platform ${platformClass}">${platformLabel}</span>
      </div>
      <div class="card__body">
        <p class="card__unit">${unitLine}</p>
        <h3 class="card__title">${listing.title}</h3>
        <div class="card__meta">
          <span>🛏 ${listing.beds} bed</span>
          <span>🚿 ${listing.baths} bath</span>
        </div>
        <span class="card__view-badge ${viewClass}">${viewLabel}</span>
        ${availBadge}
        <p class="card__desc">${listing.desc}</p>
        ${buttonsHtml}
      </div>
    </article>
  `;
}

// ── Filter & render ─────────────────────────────────────────────────────────
function renderListings(filter) {
  currentFilter = filter;
  const grid = document.getElementById("listings-grid");
  if (!grid) return;

  const filtered = filter === "all"
    ? LISTINGS
    : LISTINGS.filter(l => {
        if (l.view === filter) return true;
        if (filter === "airbnb" || filter === "vrbo") {
          return l.platforms.some(p => p.name === filter);
        }
        return false;
      });

  grid.innerHTML = filtered.map(buildCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderListings("all");

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderListings(btn.dataset.filter);
    });
  });
});
