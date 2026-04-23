// SpaceCoastStays — Sandcastles Condominiums listing data
// 1000 N Atlantic Ave, Cocoa Beach FL


const LISTINGS = [
  {
    unit: "201",
    floor: 2,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Beachfront Retreat",
    desc: "Wake up to the sound of waves in this bright second-floor corner unit. Step onto your balcony and watch the sunrise over the Atlantic.",
    platform: "vrbo",
    url: "https://www.vrbo.com/408135",
    photo: "images/024A5980.jpg",
  },
  {
    unit: "211",
    floor: 2,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Coastal Hideaway",
    desc: "Spacious second-floor condo with sweeping ocean views. Updated kitchen, open living space, and easy access to the beach.",
    platform: "vrbo",
    url: "https://www.vrbo.com/78187",
    photo: "images/024A5968.jpg",
  },
  {
    unit: "312",
    floor: 3,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Champion's Cove",
    desc: "Beautifully styled third-floor unit with partial ocean and pool views. Known for its warm coastal decor and 5-star hospitality.",
    platform: "airbnb",
    url: "https://www.airbnb.com/h/championscove",
    photo: "images/024A5959.jpg",
  },
  {
    unit: "316",
    floor: 3,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Atlantic Sunrise",
    desc: "Oceanfront on the third floor with unobstructed views of the Atlantic. Sip your coffee as rockets trace across the morning sky.",
    platform: "airbnb",
    url: "https://www.airbnb.com/s/Sandcastles-Condominiums--Cocoa-Beach--FL",
    photo: "images/024A5938.jpg",
  },
  {
    unit: "404",
    floor: 4,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Sea & Sky Suite",
    desc: "Fourth-floor oceanfront unit with panoramic views of the Atlantic. Light-filled and airy with a fully equipped kitchen.",
    platform: "vrbo",
    url: "https://www.vrbo.com/751735",
    photo: "images/024A5990.jpg",
  },
  {
    unit: "407",
    floor: 4,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "The Sandcastle",
    desc: "A classic Cocoa Beach condo with fresh coastal decor. Enjoy ocean views from the living room and a short walk to the sand.",
    platform: "vrbo",
    url: "https://www.vrbo.com/197579",
    photo: "images/024A5968.jpg",
  },
  {
    unit: "409",
    floor: 4,
    view: "pool-view",
    beds: 2,
    baths: 2,
    title: "Poolside Paradise",
    desc: "Relaxed fourth-floor unit overlooking the heated pool. Perfect for families — lounge poolside then walk two minutes to the ocean.",
    platform: "vrbo",
    url: "https://www.vrbo.com/1368853",
    photo: "images/024A6047.jpg",
  },
  {
    unit: "510",
    floor: 5,
    view: "pool-view",
    beds: 2,
    baths: 2,
    title: "Sunset Terrace",
    desc: "Fifth-floor condo with western exposure — catch spectacular Florida sunsets from your private balcony over the pool deck.",
    platform: "vrbo",
    url: "https://www.vrbo.com/7120752ha",
    photo: "images/024A6004.jpg",
  },
  {
    unit: "600",
    floor: 6,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Horizon View",
    desc: "Stunning sixth-floor oceanfront unit with sweeping north-to-south Atlantic views. High enough to see launches, close enough to hear the waves.",
    platform: "airbnb",
    url: "https://www.airbnb.com/s/Sandcastles-Condominiums--Cocoa-Beach--FL",
    photo: "images/024A5938.jpg",
  },
  {
    unit: "601",
    floor: 6,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "The Lookout",
    desc: "Corner unit on the sixth floor with wrap-around ocean views. Ideal for rocket launch watching and stunning sunrise photography.",
    platform: "vrbo",
    url: "https://www.vrbo.com",
    photo: "images/024A5980.jpg",
  },
  {
    unit: "608",
    floor: 6,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Happy Palm Stays",
    desc: "Charming sixth-floor unit curated by Happy Palm Stays. Bright tropical decor, ocean breezes, and everything you need for the perfect beach escape.",
    platform: "airbnb",
    url: "https://www.airbnb.com/s/Sandcastles-Condominiums--Cocoa-Beach--FL",
    photo: "images/024A5959.jpg",
  },
  {
    unit: "614",
    floor: 6,
    view: "pool-view",
    beds: 2,
    baths: 2,
    title: "Palms & Pool",
    desc: "Elevated pool views from the sixth floor with easy elevator access to the beach. Great for longer stays and families.",
    platform: "vrbo",
    url: "https://www.vrbo.com",
    photo: "images/024A6047.jpg",
  },
  {
    unit: "701",
    floor: 7,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Penthouse View",
    desc: "Top-floor corner unit with the best ocean views in the building. Watch rocket launches from your private balcony with 180° Atlantic panoramas.",
    platform: "airbnb",
    url: "https://www.airbnb.com/rooms/13129801",
    photo: "images/024A5990.jpg",
  },
  {
    unit: "711",
    floor: 7,
    view: "oceanfront",
    beds: 2,
    baths: 2,
    title: "Above the Clouds",
    desc: "Seventh-floor oceanfront unit with unbeatable views. Bright, modern, and meticulously maintained — a true top-tier beach escape.",
    platform: "vrbo",
    url: "https://www.vrbo.com",
    photo: "images/024A5968.jpg",
  },
  {
    unit: "713",
    floor: 7,
    view: "ocean-view",
    beds: 2,
    baths: 2,
    title: "Sky & Shore",
    desc: "Airy seventh-floor condo with ocean vistas and coastal Florida styling. High floors, cool breezes, and memories you'll bring back every year.",
    platform: "vrbo",
    url: "https://www.vrbo.com",
    photo: "images/024A5950.jpg",
  },
];

// ── Render & filter logic ──

const VIEW_LABELS = {
  "oceanfront":  "Oceanfront",
  "ocean-view":  "Ocean View",
  "pool-view":   "Pool View",
};

function buildCard(listing) {
  const viewClass = `card__view-badge--${listing.view}`;
  const viewLabel = VIEW_LABELS[listing.view];
  const platformClass = `card__platform--${listing.platform}`;
  const platformLabel = listing.platform === "airbnb" ? "Airbnb" : "VRBO";
  const linkClass = `card__link--${listing.platform}`;
  const linkLabel = listing.platform === "airbnb"
    ? "Book on Airbnb ↗"
    : "Book on VRBO ↗";

  return `
    <article class="listing-card" data-view="${listing.view}" data-platform="${listing.platform}">
      <div class="card__image">
        <img src="${listing.photo}" alt="${listing.title} interior" loading="lazy" />
        <span class="card__platform ${platformClass}">${platformLabel}</span>
      </div>
      <div class="card__body">
        <p class="card__unit">Unit ${listing.unit} · Floor ${listing.floor}</p>
        <h3 class="card__title">${listing.title}</h3>
        <div class="card__meta">
          <span>🛏 ${listing.beds} bed</span>
          <span>🚿 ${listing.baths} bath</span>
        </div>
        <span class="card__view-badge ${viewClass}">${viewLabel}</span>
        <p class="card__desc">${listing.desc}</p>
        <a href="${listing.url}" target="_blank" rel="noopener noreferrer" class="card__link ${linkClass}">${linkLabel}</a>
      </div>
    </article>
  `;
}

function renderListings(filter) {
  const grid = document.getElementById("listings-grid");
  if (!grid) return;

  const filtered = filter === "all"
    ? LISTINGS
    : LISTINGS.filter(l => l.view === filter || l.platform === filter);

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
