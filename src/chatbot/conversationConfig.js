export const ROOT_QUICK_REPLIES = [
  { label: "Book consultation", value: "book consultation" },
  { label: "Pricing", value: "pricing" },
  { label: "Service area", value: "service area" },
  { label: "Talk to support", value: "support" },
  { label: "Report an issue", value: "grievance" },
];

export const INFO_RESPONSES = {
  pricing: {
    text: "First consultation at home is FREE. Follow-up sessions start from Rs. 799. I can also help you request a consultation right now.",
    quickReplies: [
      { label: "Book consultation", value: "book consultation" },
      { label: "Service area", value: "service area" },
      { label: "Talk to support", value: "support" },
    ],
  },
  service_area: {
    text: "We currently support home physiotherapy visits in Delhi and Gurgaon. Share your area if you want us to check whether we can visit.",
    quickReplies: [],
  },
  general_faq: {
    text: "I can help with bookings, pricing, service areas, and general FlexCare questions. What would you like to know?",
    quickReplies: ROOT_QUICK_REPLIES,
  },
  grievance: {
    text: "I'm sorry something went wrong. I can help log this as a priority grievance for the FlexCare team right away.",
    quickReplies: [
      { label: "Report grievance", value: "grievance" },
      { label: "Talk to support", value: "support" },
    ],
  },
  unknown: {
    text: "I want to guide you properly. Are you trying to book a consultation, ask about pricing, check the service area, or contact support?",
    quickReplies: ROOT_QUICK_REPLIES,
  },
};

export const SERVICE_AREA_CONFIG = {
  supportedRegions: [
    "delhi",
    "new delhi",
    "south delhi",
    "north delhi",
    "east delhi",
    "west delhi",
    "central delhi",
    "gurgaon",
    "gurugram",
    "ggn",
  ],
  unsupportedRegions: [
    "noida",
    "greater noida",
    "ghaziabad",
    "faridabad",
    "mumbai",
    "pune",
    "bengaluru",
    "bangalore",
    "hyderabad",
    "chennai",
    "kolkata",
    "jaipur",
  ],
  supportedResponse:
    "Yes, we currently serve that area for home physiotherapy visits. If you want, I can help you request a consultation right away.",
  unsupportedResponse:
    "We are not serving that area yet for home visits. If you'd like, you can still share your details and our team can let you know when we expand there.",
  clarificationResponse:
    "I could not place that area confidently yet. Is it in Delhi or Gurgaon?",
  quickReplies: [
    { label: "Book consultation", value: "book consultation" },
    { label: "Talk to support", value: "support" },
    { label: "Pricing", value: "pricing" },
  ],
  clarificationReplies: [
    { label: "Delhi", value: "delhi" },
    { label: "Gurgaon", value: "gurgaon" },
    { label: "No, another city", value: "another city" },
  ],
};

export const CONVERSATION_FLOWS = {
  booking: {
    intro:
      "I can help you request a home consultation. Please share a few details and our care team will follow up.",
    completion:
      "Thanks. Your booking request has been sent to the FlexCare team. They will contact you shortly to confirm the consultation.",
    steps: [
      { id: "name", field: "name", prompt: "What is your full name?", validate: "required" },
      { id: "phone", field: "phone", prompt: "What phone number should we call?", validate: "phone" },
      { id: "location", field: "location", prompt: "Which area or address should we visit?", validate: "required" },
      { id: "concern", field: "concern", prompt: "What issue would you like help with?", validate: "required" },
    ],
  },
  support: {
    intro:
      "I can pass your question to the FlexCare team. Please share a few details first.",
    completion:
      "Thanks. Your support request has been submitted and our team will get back to you shortly.",
    steps: [
      { id: "name", field: "name", prompt: "What is your name?", validate: "required" },
      { id: "phone", field: "phone", prompt: "What phone number should we use to reach you?", validate: "phone" },
      { id: "question", field: "question", prompt: "Please share your question or concern.", validate: "required" },
    ],
  },
  grievance: {
    intro:
      "I'm sorry that something bad happened. I'll help raise this as a priority grievance so the FlexCare team can review it quickly.",
    completion:
      "Thank you for sharing this. Your grievance has been marked as high priority and the FlexCare team will reach out as soon as possible.",
    steps: [
      { id: "name", field: "name", prompt: "What is your name?", validate: "required" },
      { id: "phone", field: "phone", prompt: "What phone number should we use to reach you urgently?", validate: "phone" },
      {
        id: "grievanceDetails",
        field: "grievanceDetails",
        prompt: "Please describe what happened so we can prioritize it correctly.",
        validate: "required",
      },
    ],
  },
};
