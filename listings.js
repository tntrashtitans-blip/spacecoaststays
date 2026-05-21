// SpaceCoastStays — Sandcastles Condominiums listing data
// 1000 N Atlantic Ave, Cocoa Beach FL
// Real listings sourced from Airbnb & VRBO research — April 2025

// ── Date & availability state ────────────────────────────────────────────────
let dates = { checkIn: null, checkOut: null };
let currentFilter = "all";
// keyed by unit number string — values: "checking" | "available" | "unavailable" | null
let unitAvailability = {};

// Fallback thumbnails for VRBO listings (can't extract their photos programmatically)
const VRBO_THUMBS = [
  "images/DJI_0244.webp",
  "images/024A6050.webp",
  "images/DJI_0297.webp",
];

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
    photos: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-659336589864549620/original/fc64d40a-7f46-47c2-ba12-35cba309d1e5.png",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-659336589864549620/original/2ca1db4a-a416-4bd1-b8d7-233c418c2419.jpeg",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-659336589864549620/original/50c80a41-88e7-4777-95cd-b8314539274e.jpeg",
    ],
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
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-30351808/original/2d1a2d60-d911-483f-8351-045846693fea.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-30351808/original/f3809c02-bdd1-424d-b996-a3802790902a.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-30351808/original/af0a63ed-a14c-4fe9-a59d-e2ef22029e1d.jpeg",
    ],
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
    photos: [
      "https://a0.muscache.com/im/pictures/a38c90cd-a380-4d6c-90cd-91dc52301c60.jpg",
      "https://a0.muscache.com/im/pictures/bba89281-c406-4f57-806c-938eac0179fb.jpg",
      "https://a0.muscache.com/im/pictures/c5233886-f6d7-41c2-9071-887da948a626.jpg",
    ],
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
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-765207674629970988/original/82c3cc56-3ca7-4658-ad7d-bd9dcd8f8075.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-765207674629970988/original/7fc36a7f-421d-4ed0-a8f0-fbb6e1802336.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-765207674629970988/original/12725bfc-e592-4d8f-bf2d-ab0368af373f.jpeg",
    ],
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
    photo: "images/Living Room.webp",
    photos: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1066137435990680028/original/8ca21a27-ecc8-4e44-9282-36c418ff9c5b.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1066137435990680028/original/ba553020-4f51-427a-acfd-ea236b7b108a.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1066137435990680028/original/00679862-c155-4ac6-9a7c-2f8ade61541f.jpeg",
    ],
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
    photos: null,
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
    photos: null,
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
    photos: null,
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
    photos: null,
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
    photos: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1377600827057414395/original/c09b9de7-7387-40f7-bf8c-093a23e0798a.jpeg",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1377600827057414395/original/e0547800-2e93-4555-b5c2-aa4cb26f1732.jpeg",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1377600827057414395/original/6f93784e-7d9d-4146-9d63-7f6a0d3818b5.jpeg",
    ],
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
    photos: null,
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
    photos: [
      "https://a0.muscache.com/im/pictures/303aa15a-e886-4fb8-a0e5-10e4ce83917f.jpg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDQ1OTAwMjM%3D/original/7e7de1f3-5d68-4d92-8432-65c27a5aa5f3.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-44590023/original/c7b23ea8-1cbc-4f1c-ba6e-1b3ec612528d.jpeg",
    ],
  },
  {
    unit: "716",
    floor: 7,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Sunrise to Sunset at Sandcastles 716",
    desc: "Top-floor family and pet-friendly condo with sunrise ocean views, sunset balcony time, 3 beds, and resort amenities. A high-floor perch for beach days, launches, and Cocoa Beach evenings.",
    platforms: [
      { name: "airbnb", url: "https://www.airbnb.com/rooms/762275212261958250" }
    ],
    photo: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzYyMjc1MjEyMjYxOTU4MjUw/original/0b21a8b0-f3a3-41f7-b973-43b935e838f8.jpeg",
    photos: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-762275212261958250/original/2271f6b7-0e36-4536-8695-909e25c9ae2c.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-762275212261958250/original/a2160c28-7c75-4c6f-8d1c-cbd7ebbd8675.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzYyMjc1MjEyMjYxOTU4MjUw/original/80b6699b-3fed-4eec-9faa-64a426070d63.jpeg",
    ],
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
    photos: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-587677510430864991/original/735ef4f6-632b-4e29-89c2-c0c875ad1209.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-587677510430864991/original/aee1390e-aeea-413f-854c-34c9bf73c612.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-587677510430864991/original/066a6c4b-5d63-4dee-aa3c-8fd3fe0319b1.jpeg",
    ],
  },
  {
    unit: null,
    availabilityKey: "19854968",
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
    photos: [
      "https://a0.muscache.com/im/pictures/7626a23b-8594-45a7-b818-8ac390f872fa.jpg",
      "https://a0.muscache.com/im/pictures/d455d0f7-cb4c-48cb-9a01-1ddf81dc1084.jpg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-19854968/original/84e25801-550f-4952-840f-cc7a95d8ab6a.jpeg",
    ],
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
    photos: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-728944430026918864/original/e648ea7e-44a8-4c72-bf24-ab813eccc30b.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-728944430026918864/original/9decc7c2-bf6c-4c21-bab2-1ae08b88548e.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-728944430026918864/original/db83e94a-166c-43f8-8dca-aec255d2613d.jpeg",
    ],
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
    photos: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-937690582144870987/original/c82d1f64-08ca-487f-b31f-a57bbc6db5c3.jpeg",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-937690582144870987/original/a0633563-a828-4d2b-b239-e8c2c7339b7d.jpeg",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-937690582144870987/original/c46c17c0-67b6-485f-b4e3-bc32738a1960.jpeg",
    ],
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
    photos: null,
  },

  // ── OCEAN VIEW (floor unlisted) ─────────────────────────────────────────────
  {
    unit: null,
    availabilityKey: "934157971631186406",
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
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-934157971631186406/original/a99cefe8-1583-4d4b-b61e-31d4910b0a7b.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-934157971631186406/original/a4b20327-6fb8-41a0-8487-c3311a633ee6.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-934157971631186406/original/f9a69789-4675-4795-a32f-428cfc4541b2.jpeg",
    ],
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
    photos: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1085025749289849737/original/248f9367-7b24-46d2-9346-abc903193c12.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1085025749289849737/original/5a278ab3-b5dd-4cf9-bae8-35714e7c9243.jpeg",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1085025749289849737/original/a210a847-1db0-44c6-9ffc-70a3fb890a63.jpeg",
    ],
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
    photos: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1344561008303459786/original/e394ffba-3953-4d35-8295-6277ba470f62.jpeg",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1344561008303459786/original/2d106016-06df-469e-81bc-7eb14d965445.jpeg",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1344561008303459786/original/2b9962c4-5f6e-41ee-a05f-cd995ae5bc67.jpeg",
    ],
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
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1487947670862624545/original/93fa044f-3b08-468e-bff2-d1945ae1bc84.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1487947670862624545/original/b0b02dcc-12cc-4a89-8c94-0c2a8a3c905a.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1487947670862624545/original/cf3c36af-d636-474c-a186-1fb04ed142ae.jpeg",
    ],
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
  const viewLabel = VIEW_LABELS[listing.view];

  // Unit / floor display line
  const parts = [];
  if (listing.unit)  parts.push(`Unit ${listing.unit}`);
  if (listing.floor) parts.push(`Floor ${listing.floor}`);
  const unitLine = parts.length ? parts.join(" · ") : "Sandcastles";

  // Platform info
  const isDual = listing.platforms.length > 1;
  const primaryName = listing.platforms[0].name;

  // View overlay badge color
  const viewOverlayClass = `card__view-overlay--${listing.view}`;

  // Thumbnails: use per-listing photos if available, else building fallbacks
  const thumbs = listing.photos || VRBO_THUMBS;

  // Availability badge for listings with live calendar checking
  const availabilityKey = listing.availabilityKey || listing.unit;
  const avail = availabilityKey ? unitAvailability[availabilityKey] : null;
  let availBadge = "";
  if (avail === "checking") {
    availBadge = `<span class="card__avail card__avail--checking">Checking calendar…</span>`;
  } else if (avail === "available") {
    availBadge = `<span class="card__avail card__avail--yes">✓ Available for your dates</span>`;
  } else if (avail === "unavailable") {
    availBadge = `<span class="card__avail card__avail--no">✗ Not available for these dates</span>`;
  }

  // Book Now button(s)
  let buttonsHtml;
  if (isDual) {
    buttonsHtml = `<div class="card__links-split">
      ${listing.platforms.map(p =>
        `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="card__book-btn card__book-btn--${p.name}">Book on ${p.name === "airbnb" ? "Airbnb" : "VRBO"} ↗</a>`
      ).join("")}
    </div>`;
  } else {
    const label = primaryName === "airbnb" ? "Book on Airbnb ↗" : "Book on VRBO ↗";
    buttonsHtml = `<a href="${listing.platforms[0].url}" target="_blank" rel="noopener noreferrer" class="card__book-btn card__book-btn--${primaryName}">${label}</a>`;
  }

  return `
    <article class="listing-card" data-view="${listing.view}" data-platforms="${listing.platforms.map(p => p.name).join(" ")}">
      <div class="card__photos">
        <div class="card__photo-hero">
          <img src="${listing.photo}" alt="${listing.title}" loading="lazy" />
          <span class="card__view-overlay ${viewOverlayClass}">${viewLabel}</span>
          <button class="card__heart" aria-label="Save">♡</button>
        </div>
        <div class="card__photo-thumbs">
          <img src="${thumbs[0]}" alt="${listing.title} photo 2" loading="lazy" />
          <img src="${thumbs[1]}" alt="${listing.title} photo 3" loading="lazy" />
          <img src="${thumbs[2]}" alt="${listing.title} photo 4" loading="lazy" />
        </div>
      </div>
      <div class="card__body">
        <p class="card__unit">${unitLine}</p>
        <h3 class="card__title">${listing.title}</h3>
        <div class="card__meta">
          <span>🛏 ${listing.beds} bed</span>
          <span>🚿 ${listing.baths} bath</span>
        </div>
        ${availBadge}
        <p class="card__desc">${listing.desc}</p>
        ${buttonsHtml}
      </div>
    </article>
  `;
}

// ── Filter & render ─────────────────────────────────────────────────────────
function getAvailabilityKey(listing) {
  return listing.availabilityKey || listing.unit || null;
}

function sortAvailableFirst(listings) {
  return listings
    .map((listing, index) => ({ listing, index }))
    .sort((a, b) => {
      const aKey = getAvailabilityKey(a.listing);
      const bKey = getAvailabilityKey(b.listing);
      const aAvailable = aKey && unitAvailability[aKey] === "available";
      const bAvailable = bKey && unitAvailability[bKey] === "available";

      if (aAvailable !== bAvailable) return aAvailable ? -1 : 1;
      return a.index - b.index;
    })
    .map(({ listing }) => listing);
}

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

  grid.innerHTML = sortAvailableFirst(filtered).map(buildCard).join("");
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
