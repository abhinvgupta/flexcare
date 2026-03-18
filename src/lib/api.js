const rawApiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const API_BASE_URL = rawApiBaseUrl.startsWith("http")
  ? rawApiBaseUrl
  : `http://${rawApiBaseUrl}`;

export async function submitContactInquiry(payload) {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Unable to submit your inquiry.");
  }

  return result;
}
