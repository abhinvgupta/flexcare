const INTENT_KEYWORDS = {
  grievance: [
    "bad happened",
    "complaint",
    "grievance",
    "unhappy",
    "not happy",
    "very bad",
    "worse",
    "wrong treatment",
    "rude",
    "issue after session",
    "problem after session",
    "something bad happened",
    "terrible",
    "poor service",
  ],
  booking: [
    "book",
    "booking",
    "appointment",
    "consultation",
    "session",
    "visit",
    "schedule",
    "home consultation",
  ],
  pricing: ["price", "pricing", "cost", "charge", "fee", "fees", "799", "free"],
  service_area: [
    "service area",
    "areas",
    "location",
    "locality",
    "gurgaon",
    "gurugram",
    "delhi",
    "serve",
  ],
  support: [
    "support",
    "contact",
    "help",
    "call me",
    "issue",
    "problem",
    "query",
  ],
  general_faq: ["what", "how", "when", "do you", "can you", "service", "treatment", "faq"],
};

function normalizeInput(value) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

export function detectIntent(input) {
  const normalizedInput = normalizeInput(input);

  if (!normalizedInput) {
    return "unknown";
  }

  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    if (keywords.some((keyword) => normalizedInput.includes(keyword))) {
      return intent;
    }
  }

  return normalizedInput.includes("?") ? "general_faq" : "unknown";
}
