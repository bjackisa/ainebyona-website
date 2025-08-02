export const campaignData = {
  candidate: {
    name: "Ainebyona Nicholas",
    position: "Western Youth MP 2026–2031",
    phones: ["0773695668", "0759070886"],
    email: "ainenicholas3@gmail.com"
  },
  
  campaign: {
    slogan: "Lighting the Youth Nation",
    vision: "To ignite and empower a generation of youth leaders, change-makers, problem solvers and patriotic citizens through credible value-driven political representation in national parliament",
    
    objectives: [
      {
        title: "Win the 2026 Election",
        description: "Through a transparent, inclusive, and issue-based campaign that resonates with the youth."
      },
      {
        title: "Raise Awareness",
        description: "Build support for youth-centered legislation and development programs."
      },
      {
        title: "Inspire Civic Engagement",
        description: "Promote political education and active participation among youth."
      }
    ],
    
    targetAudience: [
      {
        title: "National Youth Council",
        description: "Three college voters aged 18-30 at sub county level"
      },
      {
        title: "Student Representatives",
        description: "UNSA nominees and youth among PWDs"
      },
      {
        title: "Youth Workforce",
        description: "Unemployed and underemployed youth, student leaders"
      },
      {
        title: "Sector Workers",
        description: "Youth in agriculture, arts, and informal sectors"
      }
    ]
  },
  
  strategicPillars: [
    {
      title: "Youth Economic Empowerment",
      icon: "TrendingUp",
      color: "from-primary to-blue-600",
      iconColor: "text-primary",
      initiatives: [
        "Job creation programs",
        "Entrepreneurship support", 
        "Access to capital",
        "Skills development"
      ]
    },
    {
      title: "Education & Skills",
      icon: "GraduationCap",
      color: "from-secondary to-purple-600",
      iconColor: "text-secondary",
      initiatives: [
        "Digital literacy programs",
        "Vocational training",
        "Higher education access",
        "Professional certification"
      ]
    },
    {
      title: "Health & Wellbeing",
      icon: "Heart",
      color: "from-green-500 to-green-600",
      iconColor: "text-green-500",
      initiatives: [
        "Healthcare access",
        "Mental health support",
        "Sports & recreation",
        "Preventive care"
      ]
    },
    {
      title: "Civic Participation",
      icon: "Users",
      color: "from-accent to-yellow-600",
      iconColor: "text-accent",
      initiatives: [
        "Leadership development",
        "Civic education",
        "Youth advocacy",
        "Community service"
      ]
    },
    {
      title: "Digital Transformation",
      icon: "Rocket",
      color: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-500",
      initiatives: [
        "Internet connectivity",
        "Digital services",
        "Tech innovation",
        "E-governance"
      ]
    }
  ],
  
  budget: {
    total: 60000000,
    currency: "UGX",
    breakdown: [
      {
        category: "Community Outreach Events",
        description: "Youth town halls, stakeholder meetings, transport, refreshments",
        amount: 15000000,
        percentage: 25,
        color: "from-primary to-blue-600"
      },
      {
        category: "Transportation & Fuel",
        description: "Campaign travel across the Western Region",
        amount: 10000000,
        percentage: 17,
        color: "from-secondary to-purple-600"
      },
      {
        category: "Campaign Materials",
        description: "Posters, banners, t-shirts, flyers, stickers",
        amount: 8000000,
        percentage: 13,
        color: "from-accent to-yellow-600"
      },
      {
        category: "Media & Communications",
        description: "Radio talk shows, jingles, video production, social media",
        amount: 8000000,
        percentage: 13,
        color: "from-green-500 to-green-600"
      },
      {
        category: "Volunteer Mobilization",
        description: "Campaign team and political focal persons across the region",
        amount: 6000000,
        percentage: 10,
        color: "from-indigo-500 to-indigo-600"
      },
      {
        category: "Legal & Compliance",
        description: "Nomination fees, legal advisory, regulatory filing",
        amount: 5000000,
        percentage: 8,
        color: "from-pink-500 to-pink-600"
      },
      {
        category: "Contingency Fund",
        description: "For unexpected costs or opportunities",
        amount: 5000000,
        percentage: 8,
        color: "from-red-500 to-red-600"
      },
      {
        category: "Printing & Documentation",
        description: "Manifesto booklets, concept notes, proposal packages",
        amount: 3000000,
        percentage: 5,
        color: "from-teal-500 to-teal-600"
      }
    ]
  },
  
  supportTypes: [
    { type: "Cash contributions", icon: "Banknote" },
    { type: "In-kind donations", icon: "Gift" },
    { type: "Volunteer support", icon: "HandHeart" },
    { type: "Social media promotion", icon: "Share" }
  ],
  
  paymentMethods: {
    mobileMoney: {
      airtel: {
        name: "Airtel Money",
        number: "0759070886",
        dialCode: "*185*1*1*0759070886*5#",
        color: "text-red-500",
        appInstructions: "If using MyAirtel App, send to 0759070886 with your reference code as reason."
      },
      mtn: {
        name: "MTN MoMo Pay", 
        number: "0773695668",
        dialCode: "*165*1*1*0773695668#",
        color: "text-yellow-500",
        appInstructions: "If using MoMo App, send to 0773695668 with your reference code as reason."
      }
    },
    banks: {
      stanbic: {
        name: "Stanbic Bank",
        account: "9030021639280",
        color: "text-blue-500"
      },
      pride: {
        name: "Pride Bank",
        account: "4904803012993057",
        color: "text-green-500"
      }
    }
  }
};

export const donationPurposes = [
  { value: "campaign_materials", label: "Campaign Materials (Posters, banners, t-shirts, flyers)" },
  { value: "community_outreach", label: "Community Outreach Events (Town halls, meetings)" },
  { value: "media_communications", label: "Media & Communications (Radio, videos, social media)" },
  { value: "volunteer_mobilization", label: "Volunteer Mobilization (Campaign team support)" },
  { value: "transportation", label: "Transportation & Fuel (Campaign travel)" },
  { value: "printing", label: "Printing & Documentation (Manifesto, materials)" },
  { value: "legal_compliance", label: "Legal & Compliance (Nomination fees, legal advice)" },
  { value: "contingency", label: "Contingency Fund (Emergency needs)" },
  { value: "general", label: "General Campaign Support" }
];
