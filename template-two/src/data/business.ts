/**
 * Business data, single source of truth for the entire template.
 *
 * EVERY value below is placeholder copy. When a real business is plugged
 * into this template, every string here gets replaced with their actual
 * content. The intentionally generic naming ("Service 1", "Service Area
 * 1", lorem ipsum) makes unconverted defaults impossible to miss during
 * a real build.
 */

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE AREAS, 12 placeholder cities listed across the site.
// ─────────────────────────────────────────────────────────────────────────────
const serviceAreas = [
  "Service Area 1",
  "Service Area 2",
  "Service Area 3",
  "Service Area 4",
  "Service Area 5",
  "Service Area 6",
  "Service Area 7",
  "Service Area 8",
  "Service Area 9",
  "Service Area 10",
  "Service Area 11",
  "Service Area 12",
];

// ─────────────────────────────────────────────────────────────────────────────
// LOCATIONS, areas with dedicated /service-area/[slug] pages.
// ─────────────────────────────────────────────────────────────────────────────
const locations = [
  {
    name: "Service Area 1",
    slug: "service-area-1",
    // Short hero tagline. Keep under ~7 words so the H1 area never
    // exceeds 2 lines at hero-size type.
    tagline: "Lorem ipsum dolor sit amet.",
    // Section subtext used on the location detail page intro.
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    // Why we serve this city, the local relevance angle.
    whyHere:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // City history paragraph, 2-3 sentences of local-relevance prose.
    history:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.",
    // Famous places / recognizable points of interest in this city.
    landmarks: [
      "Local Landmark 1",
      "Local Landmark 2",
      "Local Landmark 3",
      "Local Landmark 4",
      "Local Landmark 5",
      "Local Landmark 6",
    ],
    neighborhoods: [
      "Neighborhood 1",
      "Neighborhood 2",
      "Neighborhood 3",
      "Neighborhood 4",
      "Neighborhood 5",
      "Neighborhood 6",
    ],
  },
  {
    name: "Service Area 2",
    slug: "service-area-2",
    tagline: "Duis aute irure dolor sit amet.",
    intro:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    whyHere:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    history:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    landmarks: [
      "Local Landmark 1",
      "Local Landmark 2",
      "Local Landmark 3",
      "Local Landmark 4",
      "Local Landmark 5",
      "Local Landmark 6",
    ],
    neighborhoods: [
      "Neighborhood 1",
      "Neighborhood 2",
      "Neighborhood 3",
      "Neighborhood 4",
      "Neighborhood 5",
      "Neighborhood 6",
    ],
  },
  {
    name: "Service Area 3",
    slug: "service-area-3",
    tagline: "Sed ut perspiciatis sit amet.",
    intro:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    whyHere:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    history:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio.",
    landmarks: [
      "Local Landmark 1",
      "Local Landmark 2",
      "Local Landmark 3",
      "Local Landmark 4",
      "Local Landmark 5",
      "Local Landmark 6",
    ],
    neighborhoods: [
      "Neighborhood 1",
      "Neighborhood 2",
      "Neighborhood 3",
      "Neighborhood 4",
      "Neighborhood 5",
      "Neighborhood 6",
    ],
  },
  {
    name: "Service Area 4",
    slug: "service-area-4",
    tagline: "At vero eos et accusamus.",
    intro:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    whyHere:
      "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
    history:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    landmarks: [
      "Local Landmark 1",
      "Local Landmark 2",
      "Local Landmark 3",
      "Local Landmark 4",
      "Local Landmark 5",
      "Local Landmark 6",
    ],
    neighborhoods: [
      "Neighborhood 1",
      "Neighborhood 2",
      "Neighborhood 3",
      "Neighborhood 4",
      "Neighborhood 5",
      "Neighborhood 6",
    ],
  },
  {
    name: "Service Area 5",
    slug: "service-area-5",
    tagline: "Nam libero tempore cum soluta.",
    intro:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    whyHere:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus.",
    history:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    landmarks: [
      "Local Landmark 1",
      "Local Landmark 2",
      "Local Landmark 3",
      "Local Landmark 4",
      "Local Landmark 5",
      "Local Landmark 6",
    ],
    neighborhoods: [
      "Neighborhood 1",
      "Neighborhood 2",
      "Neighborhood 3",
      "Neighborhood 4",
      "Neighborhood 5",
      "Neighborhood 6",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES, placeholder catalog with Mirror Strategy tier markers.
// ─────────────────────────────────────────────────────────────────────────────
const services = [
  {
    name: "Service 1",
    slug: "service-1",
    tier: "category" as const,
    icon: "spray",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    name: "Service 2",
    slug: "service-2",
    tier: "category" as const,
    icon: "house",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    body:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
  },
  {
    name: "Service 3",
    slug: "service-3",
    tier: "category" as const,
    icon: "roof",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    body:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
  },
  {
    name: "Service 4",
    slug: "service-4",
    tier: "category" as const,
    icon: "gutter",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    body:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
  },
  {
    name: "Service 5",
    slug: "service-5",
    tier: "category" as const,
    icon: "wrench",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.",
    body:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos.",
  },
  {
    name: "Sub-Service 1",
    slug: "sub-service-1",
    tier: "service" as const,
    parentSlug: "service-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    name: "Sub-Service 2",
    slug: "sub-service-2",
    tier: "service" as const,
    parentSlug: "service-2",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE DETAILS, long-form content for /services/[slug] pages.
// ─────────────────────────────────────────────────────────────────────────────
const serviceDetails = [
  {
    name: "Service 1",
    slug: "service-1",
    // Tagline is rendered as the BIG hero headline. Keep it short, max ~7
    // words so it never exceeds two lines at the largest hero size.
    tagline: "Lorem ipsum dolor sit amet.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    included: [
      {
        title: "Feature 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Feature 2",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
      {
        title: "Feature 3",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      },
      {
        title: "Feature 4",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
    ],
    benefits: [
      {
        title: "Benefit 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        icon: "shield" as const,
      },
      {
        title: "Benefit 2",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
        icon: "wrench" as const,
      },
      {
        title: "Benefit 3",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
        icon: "check" as const,
      },
      {
        title: "Benefit 4",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
        icon: "calendar" as const,
      },
      {
        title: "Benefit 5",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
        icon: "phone" as const,
      },
      {
        title: "Benefit 6",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.",
        icon: "quote" as const,
      },
    ],
    // "When you need this service" copy. Lead is a short framing
    // paragraph. Scenarios are individual situations that should
    // prompt the customer to book this service. Used by the
    // WhenYouNeedService component on /services/[slug].
    whenYouNeed: {
      lead:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. If any of the situations below sound familiar, it's probably time to book this service.",
      scenarios: [
        {
          title: "Scenario 1, the most common reason customers call us",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          icon: "wrench" as const,
        },
        {
          title: "Scenario 2, when the issue has crept up over time",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          icon: "calendar" as const,
        },
        {
          title: "Scenario 3, when you're prepping for a big event",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          icon: "check" as const,
        },
        {
          title: "Scenario 4, when you've just moved in or are moving out",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
          icon: "shield" as const,
        },
        {
          title: "Scenario 5, when something has visibly gotten worse",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et iusto odio.",
          icon: "phone" as const,
        },
        {
          title: "Scenario 6, when you just want it taken care of",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
          icon: "quote" as const,
        },
      ],
    },
  },
  {
    name: "Service 2",
    slug: "service-2",
    tagline: "Duis aute irure dolor sit amet.",
    intro:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    included: [
      {
        title: "Feature 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Feature 2",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
      {
        title: "Feature 3",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      },
      {
        title: "Feature 4",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
    ],
    benefits: [
      {
        title: "Benefit 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        icon: "shield" as const,
      },
      {
        title: "Benefit 2",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
        icon: "wrench" as const,
      },
      {
        title: "Benefit 3",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
        icon: "check" as const,
      },
      {
        title: "Benefit 4",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
        icon: "calendar" as const,
      },
      {
        title: "Benefit 5",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
        icon: "phone" as const,
      },
      {
        title: "Benefit 6",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.",
        icon: "quote" as const,
      },
    ],
    // "When you need this service" copy. Lead is a short framing
    // paragraph. Scenarios are individual situations that should
    // prompt the customer to book this service. Used by the
    // WhenYouNeedService component on /services/[slug].
    whenYouNeed: {
      lead:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. If any of the situations below sound familiar, it's probably time to book this service.",
      scenarios: [
        {
          title: "Scenario 1, the most common reason customers call us",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          icon: "wrench" as const,
        },
        {
          title: "Scenario 2, when the issue has crept up over time",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          icon: "calendar" as const,
        },
        {
          title: "Scenario 3, when you're prepping for a big event",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          icon: "check" as const,
        },
        {
          title: "Scenario 4, when you've just moved in or are moving out",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
          icon: "shield" as const,
        },
        {
          title: "Scenario 5, when something has visibly gotten worse",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et iusto odio.",
          icon: "phone" as const,
        },
        {
          title: "Scenario 6, when you just want it taken care of",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
          icon: "quote" as const,
        },
      ],
    },
  },
  {
    name: "Service 3",
    slug: "service-3",
    tagline: "Sed ut perspiciatis sit amet.",
    intro:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
    included: [
      {
        title: "Feature 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Feature 2",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
      {
        title: "Feature 3",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      },
      {
        title: "Feature 4",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
    ],
    benefits: [
      {
        title: "Benefit 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        icon: "shield" as const,
      },
      {
        title: "Benefit 2",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
        icon: "wrench" as const,
      },
      {
        title: "Benefit 3",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
        icon: "check" as const,
      },
      {
        title: "Benefit 4",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
        icon: "calendar" as const,
      },
      {
        title: "Benefit 5",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
        icon: "phone" as const,
      },
      {
        title: "Benefit 6",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.",
        icon: "quote" as const,
      },
    ],
    // "When you need this service" copy. Lead is a short framing
    // paragraph. Scenarios are individual situations that should
    // prompt the customer to book this service. Used by the
    // WhenYouNeedService component on /services/[slug].
    whenYouNeed: {
      lead:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. If any of the situations below sound familiar, it's probably time to book this service.",
      scenarios: [
        {
          title: "Scenario 1, the most common reason customers call us",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          icon: "wrench" as const,
        },
        {
          title: "Scenario 2, when the issue has crept up over time",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          icon: "calendar" as const,
        },
        {
          title: "Scenario 3, when you're prepping for a big event",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          icon: "check" as const,
        },
        {
          title: "Scenario 4, when you've just moved in or are moving out",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
          icon: "shield" as const,
        },
        {
          title: "Scenario 5, when something has visibly gotten worse",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et iusto odio.",
          icon: "phone" as const,
        },
        {
          title: "Scenario 6, when you just want it taken care of",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
          icon: "quote" as const,
        },
      ],
    },
  },
  {
    name: "Service 4",
    slug: "service-4",
    tagline: "Nemo enim ipsam sit amet.",
    intro:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    included: [
      {
        title: "Feature 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Feature 2",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
      {
        title: "Feature 3",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      },
      {
        title: "Feature 4",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
    ],
    benefits: [
      {
        title: "Benefit 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        icon: "shield" as const,
      },
      {
        title: "Benefit 2",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
        icon: "wrench" as const,
      },
      {
        title: "Benefit 3",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
        icon: "check" as const,
      },
      {
        title: "Benefit 4",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
        icon: "calendar" as const,
      },
      {
        title: "Benefit 5",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
        icon: "phone" as const,
      },
      {
        title: "Benefit 6",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.",
        icon: "quote" as const,
      },
    ],
    // "When you need this service" copy. Lead is a short framing
    // paragraph. Scenarios are individual situations that should
    // prompt the customer to book this service. Used by the
    // WhenYouNeedService component on /services/[slug].
    whenYouNeed: {
      lead:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. If any of the situations below sound familiar, it's probably time to book this service.",
      scenarios: [
        {
          title: "Scenario 1, the most common reason customers call us",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          icon: "wrench" as const,
        },
        {
          title: "Scenario 2, when the issue has crept up over time",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          icon: "calendar" as const,
        },
        {
          title: "Scenario 3, when you're prepping for a big event",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          icon: "check" as const,
        },
        {
          title: "Scenario 4, when you've just moved in or are moving out",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
          icon: "shield" as const,
        },
        {
          title: "Scenario 5, when something has visibly gotten worse",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et iusto odio.",
          icon: "phone" as const,
        },
        {
          title: "Scenario 6, when you just want it taken care of",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
          icon: "quote" as const,
        },
      ],
    },
  },
  {
    name: "Service 5",
    slug: "service-5",
    tagline: "Quis autem vel eum sit amet.",
    intro:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus.",
    included: [
      {
        title: "Feature 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      },
      {
        title: "Feature 2",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
      },
      {
        title: "Feature 3",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
      },
      {
        title: "Feature 4",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
    ],
    benefits: [
      {
        title: "Benefit 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
        icon: "shield" as const,
      },
      {
        title: "Benefit 2",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
        icon: "wrench" as const,
      },
      {
        title: "Benefit 3",
        description:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
        icon: "check" as const,
      },
      {
        title: "Benefit 4",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
        icon: "calendar" as const,
      },
      {
        title: "Benefit 5",
        description:
          "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
        icon: "phone" as const,
      },
      {
        title: "Benefit 6",
        description:
          "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil.",
        icon: "quote" as const,
      },
    ],
    whenYouNeed: {
      lead:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. If any of the situations below sound familiar, it's probably time to book this service.",
      scenarios: [
        {
          title: "Scenario 1, the most common reason customers call us",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          icon: "wrench" as const,
        },
        {
          title: "Scenario 2, when the issue has crept up over time",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          icon: "calendar" as const,
        },
        {
          title: "Scenario 3, when you're prepping for a big event",
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          icon: "check" as const,
        },
        {
          title: "Scenario 4, when you've just moved in or are moving out",
          description:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
          icon: "shield" as const,
        },
        {
          title: "Scenario 5, when something has visibly gotten worse",
          description:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus et iusto odio.",
          icon: "phone" as const,
        },
        {
          title: "Scenario 6, when you just want it taken care of",
          description:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
          icon: "quote" as const,
        },
      ],
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
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
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
];

const phone = "(555) 555-1234";
const phoneHref = "tel:+1" + phone.replace(/\D/g, "");
const ctaHref = "/contact";

export const business = {
  name: "Business Name",
  tagline:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  phone,
  email: "hello@businessname.example",
  founded: 2014,
  address: {
    street: "123 Main Street, Suite 100",
    city: "Service Area 1",
    state: "ST",
    zip: "00000",
    full: "123 Main Street Suite 100, Service Area 1, ST 00000",
  },
  hours: [
    { days: "Monday – Friday", time: "7:00 am – 7:00 pm" },
    { days: "Saturday", time: "8:00 am – 5:00 pm" },
    { days: "Sunday", time: "Emergency only" },
  ],
  nav,
  ctaHref,
  ctaLabel: "Get a Fast Quote",

  identityBadge: {
    short: "Locally Owned",
    long: "Locally Owned & Operated",
  },

  // Hero trust marker pills. These are generic placeholder slots for any
  // verification, certification, or social-proof signal the business wants
  // to surface (e.g., "Licensed & Insured", "Veteran-Owned", "BBB A+",
  // "5.0 ★ on Google", "Family-Owned Since 1987"). Replace the labels with
  // the four signals most relevant to the business.
  heroTrust: [
    { label: "Trust Signal 1" },
    { label: "Trust Signal 2" },
    { label: "Trust Signal 3" },
    { label: "Trust Signal 4" },
  ],

  // Single rating badge in the WelcomeIntro section.
  ratingBadges: [
    { rating: 4.9, count: 300, platform: "Google" },
  ],

  // Trust strip credentials (generic verification/social-proof slots).
  certifications: [
    { label: "Trust Signal 1" },
    { label: "Trust Signal 2" },
    { label: "Trust Signal 3" },
    { label: "Trust Signal 4" },
  ],

  // Hero stats.
  stats: [
    { value: "10+", label: "Years in Business" },
    { value: "5,000+", label: "Customers Served" },
    { value: "5.0★", label: "Average Rating" },
    { value: "100%", label: "Satisfaction" },
  ],

  // Three-step process. Step numbers are rendered visually as 01/02/03
  // badges by the ProcessSteps component, so titles never need a "Step N"
  // prefix in the data.
  // What Makes Us Different, the 3 big differentiators that set this
  // business apart from competitors. Headline-level positioning copy
  // distinct from the broader "Why trust us" reasons in whyChooseUs,
  // these are the BIG three that get the most weight on the home page.
  differentiators: {
    eyebrow: "What Makes Us Different",
    // heading + lead intentionally omitted, the eyebrow + italic accent
    // line are enough to introduce the three differentiator cards
    // without stacking text above them.
    items: [
      {
        title: "Reason One That Sets Us Apart",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        photoHint: "Wide shot showing the differentiator in action",
      },
      {
        title: "Reason Two That Sets Us Apart",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        photoHint: "Close-up of the team or process that proves this point",
      },
      {
        title: "Reason Three That Sets Us Apart",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
        photoHint: "Branded shot, vehicle, badge, or finished result photo",
      },
    ],
  },

  processSteps: [
    {
      title: "Get a Free Quote",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Get Scheduled",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    },
    {
      title: "Relax",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    },
  ],

  // Owner / founder block.
  owner: {
    name: "Owner Name",
    role: "Founder & Owner",
    initials: "ON",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },

  serviceAreas,
  locations,
  services,
  serviceDetails,

  // Gallery-page projects, the visual portfolio. Each entry tags a
  // service + area so the gallery can link out to /services/[slug] and
  // /service-area/[slug]. Aspect ratios are intentionally mixed so the
  // CSS-columns gallery layout feels editorial / Pinterest-style
  // rather than a uniform grid.
  gallery: [
    { service: "Service 1", serviceSlug: "service-1", area: "Service Area 1", areaSlug: "service-area-1",
      label: "EXTERIOR",      hint: "Wide finished property shot",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      aspect: "1/1" as const, bloom: "tl" as const },
    { service: "Service 2", serviceSlug: "service-2", area: "Service Area 2", areaSlug: "service-area-2",
      label: "BEFORE & AFTER", hint: "Side-by-side comparison",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      aspect: "4/5" as const, bloom: "tr" as const },
    { service: "Service 3", serviceSlug: "service-3", area: "Service Area 3", areaSlug: "service-area-3",
      label: "DETAIL",         hint: "Close-up of finished work",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
      aspect: "1/1" as const, bloom: "bl" as const },
    { service: "Service 4", serviceSlug: "service-4", area: "Service Area 1", areaSlug: "service-area-1",
      label: "TEAM AT WORK",   hint: "Crew on site, action shot",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      aspect: "16/9" as const, bloom: "tl" as const },
    { service: "Service 5", serviceSlug: "service-5", area: "Service Area 2", areaSlug: "service-area-2",
      label: "VEHICLE",        hint: "Branded truck on the job",
      description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.",
      aspect: "1/1" as const, bloom: "tr" as const },
    { service: "Service 1", serviceSlug: "service-1", area: "Service Area 4", areaSlug: "service-area-4",
      label: "FINISHED RESULT", hint: "Hero shot of completed work",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
      aspect: "4/5" as const, bloom: "br" as const },
    { service: "Service 2", serviceSlug: "service-2", area: "Service Area 5", areaSlug: "service-area-5",
      label: "DETAIL",         hint: "Texture / finish close-up",
      description: "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.",
      aspect: "1/1" as const, bloom: "tl" as const },
    { service: "Service 3", serviceSlug: "service-3", area: "Service Area 1", areaSlug: "service-area-1",
      label: "EXTERIOR",       hint: "Whole-property finished shot",
      description: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.",
      aspect: "16/9" as const, bloom: "tr" as const },
    { service: "Service 4", serviceSlug: "service-4", area: "Service Area 3", areaSlug: "service-area-3",
      label: "BEFORE & AFTER", hint: "Side-by-side comparison",
      description: "Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis.",
      aspect: "4/5" as const, bloom: "bl" as const },
    { service: "Service 5", serviceSlug: "service-5", area: "Service Area 4", areaSlug: "service-area-4",
      label: "DETAIL",         hint: "Close-up of finished work",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed eiusmod tempor.",
      aspect: "1/1" as const, bloom: "br" as const },
    { service: "Service 1", serviceSlug: "service-1", area: "Service Area 2", areaSlug: "service-area-2",
      label: "TEAM PORTRAIT",  hint: "Group shot of the crew",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      aspect: "1/1" as const, bloom: "tl" as const },
    { service: "Service 2", serviceSlug: "service-2", area: "Service Area 3", areaSlug: "service-area-3",
      label: "EXTERIOR",       hint: "Wide finished property shot",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
      aspect: "4/5" as const, bloom: "tr" as const },
  ],

  // About-page brand values, the 3-4 things this business cares about
  // most. Drives the ValuesGrid section. Each value gets one icon from
  // the universal home-service icon registry (shield/wrench/check/etc.)
  // so the visual vocabulary stays consistent with ProcessSteps and
  // ServiceBenefits.
  values: [
    {
      title: "Value One",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "shield" as const,
    },
    {
      title: "Value Two",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
      icon: "wrench" as const,
    },
    {
      title: "Value Three",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.",
      icon: "check" as const,
    },
    {
      title: "Value Four",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione.",
      icon: "phone" as const,
    },
  ],

  // About-page community involvement, the local-trust angle. Lead is
  // a short paragraph framing the business's roots in the community,
  // partners is a chip list of local sponsorships / charities / school
  // programs / events the business supports.
  community: {
    eyebrow: "In the Community",
    heading: "Rooted in the community we serve.",
    accent: "We give back where we live.",
    lead:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    partners: [
      { name: "Local Charity 1", role: "Annual sponsor" },
      { name: "Local School 1", role: "Equipment donations" },
      { name: "Local Sports Team", role: "Jersey sponsor" },
      { name: "Local Food Bank", role: "Volunteer crew" },
      { name: "Local Festival", role: "Yearly partner" },
      { name: "Local Veterans Group", role: "Free service" },
    ],
  },

  // About-page founder story.
  story: {
    eyebrow: "Our Story",
    heading: "Lorem ipsum dolor sit amet.",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bodySecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  // About-page team grid.
  team: [
    {
      name: "Team Member 1",
      role: "Role 1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      initials: "T1",
    },
    {
      name: "Team Member 2",
      role: "Role 2",
      bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      initials: "T2",
    },
    {
      name: "Team Member 3",
      role: "Role 3",
      bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      initials: "T3",
    },
  ],

  whyChooseUs: {
    eyebrow: "Why Choose Us",
    heading: "Lorem ipsum dolor sit.",
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    features: [
      { title: "Reason 1" },
      { title: "Reason 2" },
      { title: "Reason 3" },
      { title: "Reason 4" },
      { title: "Reason 5" },
      { title: "Reason 6" },
      { title: "Reason 7" },
      { title: "Reason 8" },
    ],
  },

  reviews: {
    rating: 5.0,
    total: 300,
    items: [
      {
        name: "CUSTOMER 1",
        rating: 5,
        subheading: "Service 1 in Service Area 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      },
      {
        name: "CUSTOMER 2",
        rating: 5,
        subheading: "Service 2 in Service Area 2",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      },
      {
        name: "CUSTOMER 3",
        rating: 5,
        subheading: "Service 3 in Service Area 3",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
      },
      {
        name: "CUSTOMER 4",
        rating: 5,
        subheading: "Service 1 in Service Area 2",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.",
      },
      {
        name: "CUSTOMER 5",
        rating: 5,
        subheading: "Service 2 in Service Area 1",
        text: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.",
      },
      {
        name: "CUSTOMER 6",
        rating: 5,
        subheading: "Service 4 in Service Area 3",
        text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas.",
      },
      {
        name: "CUSTOMER 7",
        rating: 5,
        subheading: "Service 3 in Service Area 2",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
      },
      {
        name: "CUSTOMER 8",
        rating: 5,
        subheading: "Service 1 in Service Area 3",
        text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
      },
      {
        name: "CUSTOMER 9",
        rating: 5,
        subheading: "Service 4 in Service Area 1",
        text: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      },
      {
        name: "CUSTOMER 10",
        rating: 5,
        subheading: "Service 5 in Service Area 4",
        text: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      },
      {
        name: "CUSTOMER 11",
        rating: 5,
        subheading: "Service 1 in Service Area 5",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.",
      },
      {
        name: "CUSTOMER 12",
        rating: 5,
        subheading: "Service 3 in Service Area 4",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.",
      },
      {
        name: "CUSTOMER 13",
        rating: 5,
        subheading: "Service 5 in Service Area 2",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
      },
      {
        name: "CUSTOMER 14",
        rating: 5,
        subheading: "Service 2 in Service Area 5",
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      },
      {
        name: "CUSTOMER 15",
        rating: 5,
        subheading: "Service 4 in Service Area 3",
        text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
      },
      {
        name: "CUSTOMER 16",
        rating: 5,
        subheading: "Service 1 in Service Area 4",
        text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
      },
      {
        name: "CUSTOMER 17",
        rating: 5,
        subheading: "Service 5 in Service Area 1",
        text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",
      },
      {
        name: "CUSTOMER 18",
        rating: 5,
        subheading: "Service 2 in Service Area 4",
        text: "Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga et harum quidem rerum facilis est.",
      },
    ],
  },

  // FAQs are grouped by category so the /faq page can render them as
  // sections. Categories will eventually map to each service we offer
  // (Service 1, Service 2, ...), with one bucket of "General" questions
  // covering scheduling, pricing, and warranty topics that apply across
  // every service. All copy is lorem ipsum placeholder until real
  // per-service questions are written.
  faqs: [
    {
      category: "Scheduling & Pricing",
      questions: [
        {
          question: "Quis autem vel eum iure reprehenderit?",
          answer:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero.",
        },
        {
          question: "At vero eos et accusamus et iusto odio?",
          answer:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
        },
        {
          question: "Cupiditate non provident similique sunt in culpa?",
          answer:
            "Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
        },
        {
          question: "Nam libero tempore cum soluta nobis?",
          answer:
            "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est omnis dolor.",
        },
        {
          question: "Temporibus autem quibusdam et aut officiis?",
          answer:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic.",
        },
      ],
    },
    {
      category: "General",
      questions: [
        {
          question: "Lorem ipsum dolor sit amet?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          question: "Duis aute irure dolor in reprehenderit?",
          answer:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          question: "Sed ut perspiciatis unde omnis iste natus error?",
          answer:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        },
        {
          question: "Nemo enim ipsam voluptatem quia voluptas?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.",
        },
        {
          question: "Quis autem vel eum iure reprehenderit?",
          answer:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
        },
        {
          question: "At vero eos et accusamus et iusto odio?",
          answer:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
        },
        {
          question: "Et harum quidem rerum facilis est et expedita distinctio?",
          answer:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
        },
      ],
    },
    {
      category: "Service 1",
      questions: [
        {
          question: "Lorem ipsum dolor sit amet, service 1?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        },
        {
          question: "Consectetur adipiscing elit, service 1?",
          answer:
            "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
        },
        {
          question: "Sed do eiusmod tempor incididunt service 1?",
          answer:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
        },
        {
          question: "Ut enim ad minim veniam service 1?",
          answer:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        },
        {
          question: "Quis nostrud exercitation ullamco service 1?",
          answer:
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit. Excepteur sint occaecat cupidatat non proident sunt in culpa.",
        },
      ],
    },
    {
      category: "Service 2",
      questions: [
        {
          question: "Duis aute irure dolor service 2?",
          answer:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        },
        {
          question: "In voluptate velit esse cillum service 2?",
          answer:
            "In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          question: "Excepteur sint occaecat cupidatat service 2?",
          answer:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        },
        {
          question: "Sunt in culpa qui officia service 2?",
          answer:
            "Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
        },
        {
          question: "Deserunt mollit anim id est laborum service 2?",
          answer:
            "Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.",
        },
      ],
    },
    {
      category: "Service 3",
      questions: [
        {
          question: "Sed ut perspiciatis unde omnis service 3?",
          answer:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
        },
        {
          question: "Iste natus error sit voluptatem service 3?",
          answer:
            "Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
        },
        {
          question: "Accusantium doloremque laudantium service 3?",
          answer:
            "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.",
        },
        {
          question: "Totam rem aperiam eaque ipsa service 3?",
          answer:
            "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
        },
        {
          question: "Quae ab illo inventore veritatis service 3?",
          answer:
            "Quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
        },
      ],
    },
    {
      category: "Service 4",
      questions: [
        {
          question: "Nemo enim ipsam voluptatem service 4?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam.",
        },
        {
          question: "Quia voluptas sit aspernatur service 4?",
          answer:
            "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem ipsum.",
        },
        {
          question: "Sed quia consequuntur magni dolores service 4?",
          answer:
            "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        },
        {
          question: "Qui ratione voluptatem sequi nesciunt service 4?",
          answer:
            "Qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
        },
        {
          question: "Neque porro quisquam est service 4?",
          answer:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.",
        },
      ],
    },
    {
      category: "Service 5",
      questions: [
        {
          question: "Quis autem vel eum service 5?",
          answer:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos.",
        },
        {
          question: "At vero eos et accusamus service 5?",
          answer:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
        },
        {
          question: "Et harum quidem rerum service 5?",
          answer:
            "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
        },
        {
          question: "Nam libero tempore service 5?",
          answer:
            "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est omnis dolor.",
        },
        {
          question: "Temporibus autem quibusdam service 5?",
          answer:
            "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic.",
        },
      ],
    },
    {
      category: "Service Areas",
      questions: [
        {
          question: "Lorem ipsum dolor sit amet service area?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        },
        {
          question: "Duis aute irure dolor service area?",
          answer:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
        },
        {
          question: "Sed ut perspiciatis service area?",
          answer:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.",
        },
        {
          question: "Nemo enim ipsam voluptatem service area?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est qui dolorem.",
        },
        {
          question: "Quis autem vel eum iure service area?",
          answer:
            "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos et accusamus.",
        },
      ],
    },
  ],

  socialPlatforms: [
    { name: "Google", href: "https://www.google.com/maps", icon: "google" },
    { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  ],
};

export type Business = typeof business;
export type Location = (typeof locations)[number];
export type Service = (typeof services)[number];
export type ServiceDetail = (typeof serviceDetails)[number];
export type NavItem = (typeof nav)[number];
