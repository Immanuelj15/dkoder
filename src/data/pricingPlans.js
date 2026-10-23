export const companiesByTier = {
  bronze: [
    { name: "TCS", domain: "tcs.com" },
    { name: "Infosys", domain: "infosys.com" },
    { name: "Wipro", domain: "wipro.com" },
    { name: "Accenture", domain: "accenture.com" },
    { name: "Cognizant", domain: "cognizant.com" },
    { name: "IBM", domain: "ibm.com" },
    { name: "Hexaware", domain: "hexaware.com" }
  ],
  silver: [
    { name: "TCS", domain: "tcs.com" },
    { name: "Infosys", domain: "infosys.com" },
    { name: "Hexaware", domain: "hexaware.com" },
    { name: "IBM", domain: "ibm.com" },
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Wipro", domain: "wipro.com" }
  ],
  gold: [
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Adobe", domain: "adobe.com" },
    { name: "TCS", domain: "tcs.com" },
    { name: "Infosys", domain: "infosys.com" },
    { name: "Intuit", domain: "intuit.com" },
    { name: "Flipkart", domain: "flipkart.com" }
  ],
  platinum: [
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Adobe", domain: "adobe.com" },
    { name: "Atlassian", domain: "atlassian.com" },
    { name: "Oracle", domain: "oracle.com" },
    { name: "Salesforce", domain: "salesforce.com" },
    { name: "Stripe", domain: "stripe.com" }
  ],
  super_dream: [
    { name: "Google", domain: "google.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Adobe", domain: "adobe.com" },
    { name: "Netflix", domain: "netflix.com" },
    { name: "LinkedIn", domain: "linkedin.com" },
    { name: "Uber", domain: "uber.com" },
    { name: "Oracle", domain: "oracle.com" }
  ]
};

export const pricingPlans = [
  {
    id: "bronze",
    name: "Bronze",
    price: 699,
    perDay: "₹2 a day",
    accent: "#D2691E",
    accentBg: "rgba(210,105,30,0.09)",
    accentBorder: "rgba(210,105,30,0.3)",
    badge: null,
    cta: "Purchase",
    secondaryCta: "Get Scholarship",
    targetBox: {
      lpa: "0–3 LPA",
      market: "Service Based Company Interview Questions"
    },
    companies: companiesByTier.bronze,
    features: [
      { text: "Daily challenges", included: true },
      { text: "MCQ Practice", included: true },
      { text: "Coding Questions", included: true }
    ]
  },
  {
    id: "silver",
    name: "Silver",
    price: 999,
    perDay: "₹3 a day",
    accent: "#0EA5E9",
    accentBg: "rgba(14,165,233,0.09)",
    accentBorder: "rgba(14,165,233,0.3)",
    badge: null,
    cta: "Purchase",
    secondaryCta: "Get Scholarship",
    targetBox: {
      lpa: "0–5 LPA",
      market: "Service Based Company Interview Questions"
    },
    companies: companiesByTier.silver,
    features: [
      { text: "Daily challenges", included: true },
      { text: "MCQ Practice", included: true },
      { text: "Coding Questions", included: true }
    ]
  },
  {
    id: "gold",
    name: "Gold",
    price: 1599,
    perDay: "₹5 a day",
    accent: "#D97706",
    accentBg: "rgba(217,119,6,0.09)",
    accentBorder: "rgba(217,119,6,0.3)",
    badge: null,
    cta: "Purchase",
    secondaryCta: "Get Scholarship",
    targetBox: {
      lpa: "0–7 LPA",
      market: "Service & Product Based Interview Questions"
    },
    companies: companiesByTier.gold,
    features: [
      { text: "Daily challenges", included: true },
      { text: "MCQ Practice", included: true },
      { text: "Coding Questions", included: true },
      { text: "Advanced AI Report card", included: true },
      { text: "Topic-wise and platform-wise filter enabled", included: true }
    ]
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 1999,
    perDay: "₹6 a day",
    accent: "#6366f1",
    accentBg: "rgba(99,102,241,0.08)",
    accentBorder: "rgba(99,102,241,0.32)",
    badge: "Most Popular",
    cta: "Purchase",
    secondaryCta: "Get Scholarship",
    targetBox: {
      lpa: "0–15 LPA",
      market: "Service & Product Interview Questions"
    },
    companies: companiesByTier.platinum,
    features: [
      { text: "Daily challenges", included: true },
      { text: "MCQ Practice", included: true },
      { text: "Coding Questions", included: true },
      { text: "Advanced AI Report card", included: true },
      { text: "Topic-wise and platform-wise filter enabled", included: true },
      { text: "Company-wise filter", included: true },
      { text: "Package-wise filter", included: true }
    ]
  },
  {
    id: "super_dream",
    name: "Super Dream Pack",
    price: 2999,
    perDay: "₹9 a day",
    accent: "#f59e0b",
    accentBg: "rgba(245,158,11,0.1)",
    accentBorder: "rgba(245,158,11,0.4)",
    badge: "Best Value",
    cta: "Purchase",
    secondaryCta: "Get Scholarship",
    targetBox: {
      lpa: "15+ LPA",
      market: "Product & Service Interview Questions"
    },
    companies: companiesByTier.super_dream,
    features: [
      { text: "Daily challenges", included: true },
      { text: "MCQ Practice", included: true },
      { text: "Coding Questions", included: true },
      { text: "Advanced AI Report card", included: true },
      { text: "Topic-wise and platform-wise filter enabled", included: true },
      { text: "Company-wise filter", included: true },
      { text: "Package-wise filter", included: true },
      { text: "Frequency-wise filter", included: true },
      { text: "Year-wise, Quarter-wise filter", included: true },
      { text: "All Bundles will be unlocked", included: true },
      { text: "Early Access to all Exam series & notifications", included: true }
    ]
  }
];
