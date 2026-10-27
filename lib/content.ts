// Content sourced from https://www.saugatuckcity.com (City of Saugatuck, MI).
// Images are served from the city's own upload folder and are used with the
// city's stated permission ("All images are used with explicit permission").

export const U = "https://www.saugatuckcity.com/uploads/1/3/3/9/133977444/";
export const img = (file: string) => `${U}${file}`;

export const LOGO = img("published/saugatuck-city-logo-7460.jpg?1636740073");

export const city = {
  name: "City of Saugatuck",
  address: "102 Butler Street",
  po: "PO Box 86",
  locality: "Saugatuck, MI 49453",
  phone: "(269) 857-2603",
  phoneHref: "tel:+12698572603",
  dpwPhone: "(269) 857-2638",
  dpwPhoneHref: "tel:+12698572638",
  hours: "Monday – Friday, 8:30 am – 5:00 pm",
  zoomId: "269 857 2603",
  lat: 42.6556,
  lon: -86.2034,
  facebook: "https://www.facebook.com/cityofsaugatuck",
  official: "https://www.saugatuckcity.com/",
};

export type Park = {
  slug: string;
  name: string;
  kicker: string;
  address: string;
  lede: string;
  body: string[];
  facts: { k: string; v: string }[];
  rules?: string[];
  images: string[];
  tag: "Lakeshore" | "Riverfront" | "Downtown" | "Wild";
  source: string;
};

export const parks: Park[] = [
  {
    slug: "oval-beach",
    name: "Oval Beach",
    kicker: "Top 25 Beaches in the World",
    address: "690 Perryman St.",
    tag: "Lakeshore",
    lede:
      "A dune-backed sweep of sand where the Kalamazoo River meets Lake Michigan, named one of the world's best beaches by Condé Nast Traveler.",
    body: [
      "Oval Beach sits at the foot of the dunes, a long crescent of Lake Michigan shoreline that has drawn beachgoers, painters and sunset-watchers for generations.",
      "The park is open year-round. Beach season runs from Memorial Day weekend through Labor Day weekend, when passes are sold at the gate and at City Hall.",
      "Lots can fill during peak summer hours, so consider walking, biking or riding the Interurban. You can also cross the river on the Chain Ferry and climb Mt. Baldhead or follow the John Woollam Trail to the sand.",
    ],
    facts: [
      { k: "Hours", v: "8:00 am – 10:00 pm, year-round" },
      { k: "Season", v: "Memorial Day – Labor Day weekend" },
      { k: "Day pass", v: "$15 (at the beach)" },
      { k: "City taxpayer pass", v: "$20 (City Hall only)" },
      { k: "Season pass", v: "$75" },
      { k: "Lifeguards", v: "None — swim at your own risk" },
    ],
    rules: [
      "No dogs Memorial Day weekend through September 30",
      "No alcohol, smoking, nudity, fires or personal grilling",
      "No launching watercraft from the beach",
      "Stay off the dune grass and on marked trails",
      "Weddings are not permitted on the beach (the Coghlin Park gazebo can be rented instead)",
    ],
    images: [
      "dsc-3807-ovalbeach-zahnow.jpg",
      "dsc-4505-saugatuck-kimzahnow.jpg",
      "dsc-1760saugatuck-zahnow.jpg",
      "dsc-2635-saugatuck-kimzahnow.jpg",
      "dsc-6870-zahnow-ovalbeach.jpg",
      "ekw-1128.jpeg",
      "dsc-7357.jpeg",
      "22asaugatuck-family-photographer-copy.jpg",
    ],
    source: "https://www.saugatuckcity.com/oval-beach.html",
  },
  {
    slug: "mt-baldhead-park",
    name: "Mt. Baldhead Park",
    kicker: "303 steps to the top",
    address: "Park Street, west bank of the Kalamazoo River",
    tag: "Wild",
    lede:
      "One hundred acres of protected dune, crowned by an observation deck 303 wooden steps above the river.",
    body: [
      "Mt. Baldhead rises from the west bank of the Kalamazoo River inside a critical dune area that rolls down to Oval Beach and Lake Michigan.",
      "Its 303 wooden steps, rebuilt in 2010, climb roughly 250 feet to an observation deck with a view across the river valley, the harbor and the open lake.",
      "At the base you'll find restrooms, a picnic pavilion, tables and gravel parking. Across Park Street is an accessible fishing dock and the Saugatuck Douglas History Museum.",
    ],
    facts: [
      { k: "Size", v: "100 acres" },
      { k: "Stairs", v: "303 steps, rebuilt 2010" },
      { k: "Climb", v: "≈ 250 ft to the deck" },
      { k: "Closes", v: "10:00 pm" },
    ],
    rules: ["Stay on stairs and trails", "No dogs"],
    images: ["dsc-2911-saugatuck-kimzahnow.jpg", "dsc-5762-saugatuck-kimzahnow.jpg"],
    source: "https://www.saugatuckcity.com/mt-baldhead-park.html",
  },
  {
    slug: "chain-ferry",
    name: "Chain Ferry",
    kicker: "Hand-cranked since the 1960s",
    address: "528 Water Street",
    tag: "Riverfront",
    lede:
      "The only remaining hand-cranked chain ferry of its kind in the United States, pulling passengers across the Kalamazoo River.",
    body: [
      "The ferry Diane is cranked by hand and guided across the river by a chain anchored to both banks. Slack in the chain lets it sink below the surface so boats can pass safely.",
      "A crossing has been in use here since 1857, according to the Saugatuck Douglas Historical Society. The current ferry was built in the 1960s, originally carried horses, and is owned by the City.",
      "Departures leave each dock every 10 to 15 minutes. Ride it to reach the dune trails, Mt. Baldhead, the History Museum and Oval Beach, or simply for the ride.",
    ],
    facts: [
      { k: "Ages 11+", v: "$3.00" },
      { k: "Ages 10 & under", v: "$1.00" },
      { k: "Ages 2 & under", v: "Free" },
      { k: "Dogs, bikes, strollers", v: "Ride free" },
      { k: "Capacity", v: "26 passengers (a bike counts as ½)" },
      { k: "Operator", v: "Star of Saugatuck · 269-857-4261" },
    ],
    rules: [
      "No smoking or vaping on board",
      "No motorized vehicles",
      "Shuts down for high wind, fog, lightning and heavy rain",
    ],
    images: ["dsc-6333-kimzahnow-saugatuck.jpg", "dsc-5500-kimzahnow-saugatuck.jpg"],
    source: "https://www.saugatuckcity.com/chain-ferry.html",
  },
  {
    slug: "saugatuck-harbor-natural-area",
    name: "Harbor Natural Area",
    kicker: "173 acres of living dune",
    address: "North of Oval Beach on Lake Michigan",
    tag: "Wild",
    lede:
      "Rare Great Lakes dune ecosystems on the original mouth of the Kalamazoo River, once home to the fishing village of Fishtown.",
    body: [
      "The Saugatuck Harbor Natural Area stretches along Lake Michigan north of Oval Beach. The City acquired it in 2011 with help from the Land Conservancy of West Michigan.",
      "It sits on the river's original mouth, bypassed in 1906. Its story includes the lost fishing settlement of Fishtown and a lighthouse taken by a tornado.",
      "Because the dunes here are rare and fragile, dogs are not allowed.",
    ],
    facts: [
      { k: "Size", v: "173 acres" },
      { k: "Protected", v: "2011" },
      { k: "Hours", v: "8:00 am – 10:00 pm" },
      { k: "Dogs", v: "Not permitted" },
    ],
    images: [
      "dsc-5762-saugatuck-kimzahnow.jpg",
      "dsc-2632-saugatuck-kimzahnow.jpg",
      "dsc-5179-kimzahnow-saugatuck.jpg",
      "ekw9737.jpg",
      "ekw9683.jpeg",
      "egale-nest-pano-kimzahnow_orig.jpg",
    ],
    source: "https://www.saugatuckcity.com/saugatuck-harbor-natural-area.html",
  },
  {
    slug: "wicks-park",
    name: "Wicks Park",
    kicker: "Music in the Park",
    address: "502 Water St.",
    tag: "Riverfront",
    lede:
      "A half-acre lawn on the river, home of the gazebo that hosts the summer Music in the Park series.",
    body: [
      "Wicks Park sits on the west side of Water Street between Mary and Main, just south of the Chain Ferry, with benches, picnic tables and lawn seating facing the river.",
      "Look for the restroom mural, a re-creation of Georges Seurat's A Sunday on La Grande Jatte, a fitting nod to the town's long life as an artists' colony.",
    ],
    facts: [
      { k: "Size", v: "≈ 0.5 acres" },
      { k: "Gazebo", v: "Music in the Park concerts" },
      { k: "Nearby", v: "Chain Ferry, public parking" },
    ],
    images: [
      "dsc-6349saugatuck-kimzahnow.jpg",
      "dsc-6579-kimzahnow-saugatuck.jpg",
      "dsc-2242-zahnow-saugatuck-photographer.jpg",
      "ekw-6470.jpg",
      "ekw-8832.jpeg",
    ],
    source: "https://www.saugatuckcity.com/wicks-park.html",
  },
  {
    slug: "coghlin-park",
    name: "Coghlin Park",
    kicker: "Weddings by the water",
    address: "60 Griffith Street",
    tag: "Riverfront",
    lede:
      "Half an acre of open lawn with 200 feet on the river and a gazebo made for weddings and festivals.",
    body: [
      "Coghlin Park is mostly open space, used for weddings and festivals throughout the season. The gazebo has fixed picnic tables and a long view of the Kalamazoo River.",
      "Private events need a Private Event Use Permit from City Hall.",
    ],
    facts: [
      { k: "Size", v: "≈ 0.5 acres" },
      { k: "Frontage", v: "≈ 200 ft on the river" },
      { k: "Events", v: "Private Event Use Permit" },
    ],
    images: [
      "ekw-5847.jpeg",
      "ekw-8129.jpeg",
      "dsc-7221.jpeg",
      "dsc-4551-coghlin.jpg",
      "dsc-7518-saugatuck-kimzahnow.jpg",
    ],
    source: "https://www.saugatuckcity.com/coghlin-park.html",
  },
  {
    slug: "cook-park",
    name: "Cook Park",
    kicker: "Art fairs & fireworks",
    address: "40 Water Street",
    tag: "Riverfront",
    lede:
      "An acre of green overlooking the river, home to the Waterfront Invitational Art Fair and the best seat for fireworks.",
    body: [
      "Cook Park hosts the Saugatuck Douglas Art Club's Waterfront Invitational Art Fair and is a favorite spot for picnics and fireworks over the water.",
    ],
    facts: [
      { k: "Size", v: "≈ 1 acre" },
      { k: "Known for", v: "Waterfront Invitational Art Fair" },
    ],
    images: ["ekw-4766-cook.jpeg", "ekw-9722.jpeg", "ekw-2484-cook.jpeg", "ekw-9733.jpeg", "ekw-2654-cook.jpeg"],
    source: "https://www.saugatuckcity.com/cook-park.html",
  },
  {
    slug: "village-square-park",
    name: "Village Square",
    kicker: "Heart of downtown",
    address: "Butler & Main Streets",
    tag: "Downtown",
    lede:
      "Two and a half acres across three corners of Butler and Main, with a new playground and the Village Square Art Fair.",
    body: [
      "Village Square has both active and passive spaces. A new children's playground opened in its northwest corner in spring 2024.",
      "The square hosts Memorial Day and Veterans Day observances and the Saugatuck Douglas Art Club's Village Square Art Fair.",
    ],
    facts: [
      { k: "Size", v: "≈ 2.5 acres" },
      { k: "Playground", v: "New in 2024 · closes 10 pm" },
    ],
    images: ["dsc-7788.jpg", "dsc-7188-village-square.jpg", "dsc-7795-village-square.jpg", "playground-june-2024-1_orig.jpg", "dsc-7786-vet-park.jpg"],
    source: "https://www.saugatuckcity.com/village-square-park.html",
  },
  {
    slug: "saugatuck-wilds-nature-preserve",
    name: "Saugatuck Wilds",
    kicker: "169 acres of floodplain forest",
    address: "63rd Street & 134th Avenue",
    tag: "Wild",
    lede:
      "Mature southern forest, floodplain woods, vernal pools and wetlands along the Kalamazoo River greenway.",
    body: [
      "The Saugatuck Wilds Nature Preserve covers 169 acres within the Kalamazoo River greenway. Trails lead to an overlook deck, with good birdwatching along the way.",
      "Leashed dogs are welcome.",
    ],
    facts: [
      { k: "Size", v: "169 acres" },
      { k: "Dogs", v: "Welcome on leash" },
    ],
    rules: [
      "Stay on trails",
      "No horses, bicycles or motorized vehicles",
      "No picking plants without permission",
      "No hunting, trapping or disturbing wildlife",
    ],
    images: ["sw3_orig.jpg", "sw1_orig.jpg", "sw2_orig.jpg", "sw4_orig.jpg"],
    source: "https://www.saugatuckcity.com/saugatuck-wilds-nature-preserve.html",
  },
  {
    slug: "mildred-peterson-nature-preserve",
    name: "Mildred Peterson Preserve",
    kicker: "Pond, path & Interurban Trail",
    address: "Mill St. & Simonson Dr.",
    tag: "Wild",
    lede:
      "Sixteen quiet acres of chip-and-dust walkways and benches beside a dammed backwater of Goshorn Creek.",
    body: [
      "The Mildred Peterson Nature Preserve and Interurban Trail sit right inside city limits, open year-round for walking, bird watching and spotting the creatures of the pond.",
    ],
    facts: [
      { k: "Size", v: "16+ acres" },
      { k: "Open", v: "Year-round" },
    ],
    images: ["ekw9390.jpeg", "ekw9394.jpeg", "ekw9432.jpeg", "ekw-7558.jpeg"],
    source: "https://www.saugatuckcity.com/mildred-peterson-nature-preserve.html",
  },
  {
    slug: "rose-garden",
    name: "Rose Garden",
    kicker: "Downtown in bloom",
    address: "Butler & Mason Streets",
    tag: "Downtown",
    lede: "An accessible walking path winding through rose beds and planted gardens in the middle of town.",
    body: ["Stop between galleries and cafés for a slow loop through the rose beds at the corner of Butler and Mason."],
    facts: [{ k: "Path", v: "Accessible" }],
    images: ["ekw-0901.jpg", "ekw-0863.jpeg", "ekw-1197.jpeg"],
    source: "https://www.saugatuckcity.com/rose-garden.html",
  },
  {
    slug: "john-woollam-trail",
    name: "John Woollam Trail",
    kicker: "Through the woods to the lake",
    address: "Park St. & Bliss St.",
    tag: "Wild",
    lede:
      "A wooded footpath from the Chain Ferry landing to Oval Beach, away from winding Perryman Street.",
    body: [
      "The trail fulfills a long-held city vision for a walking route to the beach. It is named for John A. Woollam, a West Michigan native, physicist and entrepreneur whose foundation helped protect the Harbor Natural Area and the land north of Perryman.",
      "By deed, the land stays undeveloped, with only primitive trails, viewing platforms, benches and steps.",
    ],
    facts: [
      { k: "From", v: "Chain Ferry landing, Park St." },
      { k: "To", v: "Oval Beach" },
    ],
    images: ["img-5829.jpeg", "img-5739.jpeg", "img-5737.jpeg", "img-5826.jpeg"],
    source: "https://www.saugatuckcity.com/john-woollam-trail.html",
  },
  {
    slug: "jones-park",
    name: "Jones Park",
    kicker: "Once 'Information Booth Park'",
    address: "Butler, Water & Culver Streets",
    tag: "Downtown",
    lede:
      "A half-acre of brick walks and shade trees, renamed for Lyle A. Jones, the city's police chief for 33 years.",
    body: [
      "Jones Park was long known as Information Booth Park for the white building that still holds area maps and pamphlets. A plaque honors Chief Jones and looks out over Kalamazoo Lake harbor.",
    ],
    facts: [{ k: "Size", v: "≈ 0.5 acres" }],
    images: ["dsc-4725.jpg"],
    source: "https://www.saugatuckcity.com/jones-park.html",
  },
  {
    slug: "willow-park",
    name: "Willow Park",
    kicker: "Boardwalk & fishing",
    address: "Kalamazoo River frontage",
    tag: "Riverfront",
    lede: "An elevated wooden boardwalk with benches along 132 feet of river, made for fishing and slow evenings.",
    body: ["Willow Park's boardwalk is a quiet place to cast a line or watch boats return to the harbor."],
    facts: [{ k: "Frontage", v: "132 ft on the river" }],
    images: ["dsc-8955.jpg"],
    source: "https://www.saugatuckcity.com/willow-park.html",
  },
];

export const gallery = [
  "dsc-7947a.jpg",
  "j1saugatuck-family-photographer-copy.jpg",
  "dsc-4722a.jpg",
  "dsc-7701.jpg",
  "satayayoga-saugatuck-kimzahnow.jpg",
  "dsc-8977a.jpg",
  "dsc-4725.jpg",
  "dsc-8955.jpg",
  "dsc-3391.jpg",
];

export const history = [
  { year: "1857", title: "A river crossing", text: "A ferry crossing on the Kalamazoo River is first recorded, the ancestor of today's chain ferry." },
  { year: "1868", title: "Village of Saugatuck", text: "The Allegan County Board of Supervisors incorporates Saugatuck as a village, reincorporated by the state legislature in 1869–70." },
  { year: "1871", title: "Spared by fire", text: "A fire department is organized in January. That October, fires destroy Holland and Fennville while Saugatuck is spared." },
  { year: "1880", title: "Hall on Butler Street", text: "A new fire house, council chamber, hall and jail rise on Butler Street, the building that is still City Hall." },
  { year: "1906", title: "A new river mouth", text: "The Kalamazoo River's original mouth is bypassed. The old channel later becomes the Harbor Natural Area." },
  { year: "1929", title: "Village Hall renewed", text: "Renovated in 1926, the hall gains a basement in 1929. In 1931 an art gallery opens in the council chamber." },
  { year: "1984", title: "City of Saugatuck", text: "Thirty years after the fire department moves out, the village becomes a city." },
  { year: "1990", title: "Historic site", text: "Following a 1989 interior redesign, City Hall joins the Michigan State Register of Historic Sites." },
  { year: "2011", title: "Dunes protected", text: "The city acquires the 173-acre Saugatuck Harbor Natural Area with the Land Conservancy of West Michigan." },
];

export const departments = [
  { name: "Assessing", href: "https://www.saugatuckcity.com/assessing.html" },
  { name: "Building", href: "https://www.saugatuckcity.com/building.html" },
  { name: "City Manager", href: "https://www.saugatuckcity.com/city-manager.html" },
  { name: "Clerk — Elections & FOIA", href: "https://www.saugatuckcity.com/clerk---elections--foia.html" },
  { name: "Public Works", href: "https://www.saugatuckcity.com/public-works.html" },
  { name: "Fire Department", href: "https://www.saugatuckfire.org" },
  { name: "Law Enforcement", href: "https://www.saugatuckcity.com/law-enforcement.html" },
  { name: "Planning, Zoning & HDC", href: "https://www.saugatuckcity.com/planningzoninghdc.html" },
  { name: "Treasurer", href: "https://www.saugatuckcity.com/treasurer.html" },
];

export const documents = [
  { title: "2026–2027 Budget", type: "PDF", group: "Finance", href: img("2026_-_2027_budget_for_website.pdf") },
  { title: "2026–2031 Capital Improvements Plan", type: "PDF", group: "Finance", href: img("3187-33_saugatuck_cip_table_2026-02-24.pdf") },
  { title: "Master Plan Update", type: "Page", group: "Planning", href: "https://www.saugatuckcity.com/master-plan-update.html" },
  { title: "2025 Master Plan Survey Results", type: "PDF", group: "Planning", href: img("saugatuck_master_plan_survey_results_2025.pdf") },
  { title: "Tri-Community Master Plan 2016–2026", type: "PDF", group: "Planning", href: img("tri-community_master_plan_2016-2026.pdf") },
  { title: "Parks & Recreation Master Plan (2024)", type: "PDF", group: "Planning", href: img("parks___recreation_master_plan_2024.pdf") },
  { title: "Short-Term Rental Task Force Report (2023)", type: "PDF", group: "Planning", href: img("saugatuck_str_report_2023-0925-w-appendix-final.pdf") },
  { title: "2026 Brush & Leaf Pickup", type: "PDF", group: "Services", href: img("2026_brush_and_leaf_schedule.pdf") },
  { title: "2026 Trash & Recycling Calendar", type: "PDF", group: "Services", href: img("saugatuck_trash___recycling_calendar_2026.pdf") },
  { title: "Lead Line Inventory", type: "Sheet", group: "Services", href: "https://docs.google.com/spreadsheets/d/1Ow6aBJim47n5I_AimEKFEGSARu6BSRxD/edit" },
  { title: "Water Service Line FAQ", type: "PDF", group: "Services", href: img("water_service_line_frequently_asked_questions.pdf") },
];

export const boards = [
  "City Council",
  "Planning Commission",
  "Historic District Commission",
  "Zoning Board of Appeals",
  "Board of Review",
  "Parks & Public Works Committee",
  "Kalamazoo Lake Harbor Authority",
  "Kalamazoo Lake Sewer & Water Authority",
  "Interurban Board of Directors",
  "Fire District Board",
  "Library Board of Trustees",
  "Short-Term Rental Task Force",
  "Parking Improvements Task Force",
  "Eurasian Water Milfoil Study Group",
  "Tri-Community Wildlife Committee",
  "Tri-Community Recycling Committee",
  "Non-Motorized Trail Study Committee",
];

export const partners = [
  { name: "Saugatuck Douglas CVB", href: "https://www.saugatuck.com/" },
  { name: "Saugatuck-Douglas History Center", href: "https://sdhistorycenter.org/" },
  { name: "Saugatuck Douglas Art Club", href: "https://www.sdartclub.org/" },
  { name: "Saugatuck Douglas Library", href: "https://www.sdlibrary.org/" },
  { name: "Saugatuck Fire District", href: "https://www.saugatuckfire.org" },
  { name: "KLSWA — Sewer & Water", href: "https://www.klswa.com/" },
];
