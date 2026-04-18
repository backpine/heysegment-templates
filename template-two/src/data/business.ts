/**
 * Business data — single source of truth for the entire site.
 *
 * Replace these placeholder values per-site. Every component on the home
 * page, service area pages, and layout (nav + footer) reads from this file.
 *
 * Content here is intentionally nonsensical — this file ships as a data
 * template. Real copy lives in each deployed site's version of this file.
 */

// Cities shown in the footer and the service-area overview city grid.
// Plain strings — no page routing attached. Add a city here the moment you
// cover it; graduate it into `locations` below once you write a dedicated
// page for it.
const serviceAreas = [
  "Dolorville",
  "Ipsum Heights",
  "Adipiscing Park",
  "Consectetur",
  "Eiusmod Valley",
  "Tempor Falls",
  "Incididunt",
  "Labore Springs",
  "Magna Harbor",
  "Aliqua Ridge",
  "Minim Crossing",
  "Veniam Station",
];

// Locations that have a dedicated service-area page at /service-area/[slug].
// The template ships with one example — Dolorville — so every deployed site
// has a working reference implementation. Duplicate the page file and add
// another entry here to create additional location pages.
const locations = [
  {
    name: "Dolorville",
    slug: "dolorville",
    tagline:
      "Servitium localis in Dolorville — eiusdem diei responsio, pretia constantia, grex quem iam nosti.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore in Dolorville — grex noster hic laborat per annos decem. Duis aute irure dolor in reprehenderit, sed fidem nostram intellegis ex opere nostro.",
    neighborhoods: ["North Dolor", "Central", "Old Town", "Riverside", "Hillcrest", "The Heights"],
  },
];

// Services offered. The broad catalog lives here — every service on the site
// is referenced by slug. A subset gets a dedicated detail page (see
// `serviceDetails` below); the rest surface as text on overview pages.
const services = [
  {
    name: "Servitium Primus",
    slug: "servitium-primus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Ipsum Installation",
    slug: "ipsum-installation",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Dolor Diagnostics",
    slug: "dolor-diagnostics",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Sit Amet Repair",
    slug: "sit-amet-repair",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Consectetur Consulting",
    slug: "consectetur-consulting",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
  },
  {
    name: "Adipiscing Assembly",
    slug: "adipiscing-assembly",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni.",
  },
];

// Services with a dedicated detail page at /services/[slug]. The template
// ships with one example — Servitium Primus — so every deployed site has a
// working reference implementation. Duplicate the page file and add another
// entry here to create additional service pages. The `slug` must match an
// entry in `services` above.
const serviceDetails = [
  {
    name: "Servitium Primus",
    slug: "servitium-primus",
    tagline:
      "Lorem ipsum dolor sit amet — honeste, celeriter, garantie plenum.",
    intro:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Servitium primus est fundamentum laboris nostri — grex peritus, instrumenta moderna, et processus probatus per annos decem.",
    included: [
      {
        title: "Inspectio gratuita",
        description:
          "Lorem ipsum dolor sit amet — inspectio detailed et propositio scripta ante quodlibet opus.",
      },
      {
        title: "Instrumenta moderna",
        description:
          "Consectetur adipiscing elit. Utimur instrumentis recentibus pro inventione cito et accurata.",
      },
      {
        title: "Grex peritus",
        description:
          "Sed do eiusmod tempor. Omnes technici licentiati, asecuritati, et per nos probati ante primum diem.",
      },
      {
        title: "Garantia plena",
        description:
          "Ut enim ad minim veniam. Omnis labor cum garantia unius anni — si redit problema, redimus sine pretio.",
      },
    ],
  },
];

// Navigation. Service Area AND Services items get auto-built dropdowns from
// the page-bearing lists (`locations`, `serviceDetails`) + an "All X" link.
// Add a detail page → the entry appears in the nav automatically.
const nav = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      ...serviceDetails.map((detail) => ({
        label: detail.name,
        href: `/services/${detail.slug}`,
      })),
    ],
  },
  { label: "About", href: "/about" },
  {
    label: "Service Area",
    href: "/service-area",
    children: [
      { label: "All Areas", href: "/service-area" },
      ...locations.map((location) => ({
        label: location.name,
        href: `/service-area/${location.slug}`,
      })),
    ],
  },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
];

// All "Get a quote" / "Get started" CTAs route to the phone line. The
// template has no contact form page by design — a local business's primary
// conversion is the phone call. Site owners can override `ctaHref` per-page
// or at the business level to point at a real contact form if they build one.
const phone = "(555) 010-0123";
const phoneHref = "tel:+1" + phone.replace(/\D/g, "");

export const business = {
  name: "Lorem Services Co.",
  tagline:
    "Dolor sit amet consectetur adipiscing elit — eiusmod tempor incididunt ut labore.",
  phone,
  email: "hello@loremservices.example",
  founded: 2008,
  address: {
    street: "1234 Ipsum Avenue, Suite 56",
    city: "Dolorville",
    state: "LO",
    zip: "00000",
    full: "1234 Ipsum Avenue Suite 56, Dolorville, LO 00000",
  },
  hours: [
    { days: "Monday – Friday", time: "7:00 am – 7:00 pm" },
    { days: "Saturday", time: "8:00 am – 5:00 pm" },
    { days: "Sunday", time: "Emergency only" },
  ],
  nav,
  ctaHref: phoneHref,
  ctaLabel: "Get a Free Quote",
  stats: [
    { value: "15+", label: "Anni Laboris" },
    { value: "8,200+", label: "Opera Perfecta" },
    { value: "4.9★", label: "Stellae Googlei" },
    { value: "24/7", label: "Subitum Auxilium" },
  ],
  serviceAreas,
  locations,
  services,
  serviceDetails,
  story: {
    eyebrow: "Our Story",
    heading: "Ab ovo usque ad mala.",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negotium nostrum anno 2008 inceptum est ex uno homine cum uno instrumento et una promissione: facere opus honeste et bene. Quindecim annis postea, eadem promissio servatur — eadem cura, eadem pretia, eadem fides.",
    bodySecond:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Grex noster nunc decem hominibus complectitur, omnes licentiati, asecuritati, et per nos probati. Opus perfectum per octo milia et ducentas vices — numerus quem quotidie augemus, et numerus qui nos humiles tenet.",
  },
  team: [
    {
      name: "Lorem Ipsum",
      role: "Owner & Master Technician",
      bio:
        "Lorem ipsum dolor sit amet — fundavit negotium anno 2008 post decem annos laboris cum companiis maioribus. Manus sua et fides honesta fundamentum omnium rerum quas facimus.",
      initials: "LI",
    },
    {
      name: "Dolor Sit",
      role: "Senior Technician",
      bio:
        "Consectetur adipiscing elit — adiunxit Lorem Services anno 2014. Specialistae est in diagnostica complexa, et fama ei est solvendi problemata quae alii amisere.",
      initials: "DS",
    },
    {
      name: "Amet Consectetur",
      role: "Office Manager",
      bio:
        "Sed do eiusmod tempor — omnia post scaenas gubernat, a programmate ad sequituras. Primus est vox quam clientes audiunt et ratio qua opera in tempore permanent.",
      initials: "AC",
    },
  ],
  whyChooseUs: {
    eyebrow: "Reason To Choose Us",
    heading: "Quare nos eligere debeas.",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Nisi ut aliquip ex ea commodo consequat — duis aute irure dolor.",
    features: [
      {
        title: "Honesta Pretia",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Tempore Praesto",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      },
      {
        title: "Peritus Grex",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
      {
        title: "Plenum Warrantum",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      },
    ],
  },
  reviews: {
    rating: 4.9,
    total: 247,
    items: [
      {
        name: "Lorem I.",
        rating: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        name: "Ipsum D.",
        rating: 5,
        text: "Ut enim ad minim veniam, quis nostrud exercitation. Absolute mirabile, recommendo omnibus amicis.",
      },
      {
        name: "Dolor S.",
        rating: 5,
        text: "Duis aute irure dolor. Velocissime et professionaliter — optimum servitium in regione nostra.",
      },
      {
        name: "Amet C.",
        rating: 5,
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa. Quinque stellae sine dubio.",
      },
      {
        name: "Consectetur A.",
        rating: 4,
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Bonum opus, modica expectatio.",
      },
      {
        name: "Adipiscing E.",
        rating: 5,
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Grex peritus et benignus — valde commendo.",
      },
      {
        name: "Eiusmod T.",
        rating: 5,
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      },
      {
        name: "Incididunt L.",
        rating: 5,
        text: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
      },
      {
        name: "Labore M.",
        rating: 5,
        text: "Itaque earum rerum hic tenetur a sapiente delectus. Mirabile, celeriter, sine mora.",
      },
    ],
  },
  faqs: [
    {
      category: "Generalia",
      questions: [
        {
          question: "Lorem ipsum dolor sit amet consectetur?",
          answer:
            "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          question: "Ut enim ad minim veniam quis nostrud?",
          answer:
            "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          question: "Duis aute irure dolor in reprehenderit?",
          answer:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.",
        },
      ],
    },
    {
      category: "Pretium et Horarium",
      questions: [
        {
          question: "Quanti constat servitium primum?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        },
        {
          question: "Quam cito potestis venire?",
          answer:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.",
        },
        {
          question: "Offertis financiationem pro operibus magnis?",
          answer:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla.",
        },
      ],
    },
    {
      category: "Post Servitium",
      questions: [
        {
          question: "Quam warrantum offertis operibus vestris?",
          answer:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
        },
        {
          question: "Quid si non contentus sum opere?",
          answer:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
        },
      ],
    },
  ],
};

export type Business = typeof business;
export type Location = (typeof locations)[number];
export type Service = (typeof services)[number];
export type ServiceDetail = (typeof serviceDetails)[number];
export type NavItem = (typeof nav)[number];
