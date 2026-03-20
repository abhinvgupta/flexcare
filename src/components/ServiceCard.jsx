// Inline SVG icon map — each icon is 24x24 viewBox, stroke-based for crispness at small sizes.
// Stroke color inherits from the parent via `currentColor`.
const SERVICE_ICONS = {
  // Post-Surgery Rehabilitation — a figure with a brace/support arm raised
  SR: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="4.5" r="1.75" />
      <path d="M12 7v5l-3 4" />
      <path d="M12 12l3 4" />
      <path d="M9 16l-1.5 4" />
      <path d="M15 16l1.5 4" />
      {/* surgical staple/brace accent */}
      <path d="M7 10h2.5M14.5 10H17" strokeWidth="1.4" />
    </svg>
  ),

  // Knee & Joint Pain — a stylised knee joint with bone ends
  KJ: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3v7" />
      <path d="M15 3v7" />
      <ellipse cx="12" cy="12" rx="4.5" ry="3.5" />
      <path d="M9 12v-2" />
      <path d="M15 12v-2" />
      <path d="M9 14v7" />
      <path d="M15 14v7" />
      <path d="M7.5 3.5h3M13.5 3.5h3" strokeWidth="1.4" />
      <path d="M7.5 20.5h3M13.5 20.5h3" strokeWidth="1.4" />
    </svg>
  ),

  // Back & Neck Pain — a spine/vertebrae column
  BN: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9.5" y="2" width="5" height="3.5" rx="1" />
      <rect x="9.5" y="7" width="5" height="3.5" rx="1" />
      <rect x="9.5" y="12" width="5" height="3.5" rx="1" />
      <rect x="9.5" y="17" width="5" height="3.5" rx="1" />
      {/* lateral processes */}
      <path d="M9.5 3.75H6.5M14.5 3.75H17.5" strokeWidth="1.3" />
      <path d="M9.5 8.75H7M14.5 8.75H17" strokeWidth="1.3" />
      <path d="M9.5 13.75H7M14.5 13.75H17" strokeWidth="1.3" />
      <path d="M9.5 18.75H7.5M14.5 18.75H16.5" strokeWidth="1.3" />
    </svg>
  ),

  // Stroke Rehabilitation — brain with a lightning/signal arc
  ST: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3C8.5 3 5.5 5.6 5.5 9c0 1.6.6 3 1.6 4.1.6.7.9 1.6.9 2.5V17h8v-1.4c0-.9.3-1.8.9-2.5C17.9 12 18.5 10.6 18.5 9c0-3.4-3-6-6.5-6z" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="9.5" y1="21" x2="14.5" y2="21" />
      {/* neural signal path */}
      <path d="M10 9l1.5 2 1-3 1.5 4" strokeWidth="1.4" />
    </svg>
  ),

  // Elderly Mobility Support — walking figure with cane
  EM: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="10" cy="4" r="1.75" />
      <path d="M10 6.5l-2 5 3 2" />
      <path d="M8 11.5l-2 6" />
      <path d="M13 8l-3 4 2 4 2 3.5" />
      {/* cane */}
      <path d="M15 9l3 10" strokeWidth="1.5" />
      <path d="M15 9c0 0 1-1.5 2.5-1" strokeWidth="1.3" />
    </svg>
  ),

  // Sports Injury Recovery — a running figure with a motion trail
  SP: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="14" cy="4" r="1.75" />
      <path d="M14 6l-2 4-4 2" />
      <path d="M12 10l1 4-2 5" />
      <path d="M13 14l3 4" />
      {/* motion trail lines */}
      <path d="M3 8h3.5" strokeWidth="1.3" strokeDasharray="1.2 1" />
      <path d="M3 11h2.5" strokeWidth="1.3" strokeDasharray="1.2 1" />
      <path d="M3 14h3" strokeWidth="1.3" strokeDasharray="1.2 1" />
    </svg>
  ),

  // Home Exercise Guidance — a dumbbell
  HE: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1.5" y="10" width="3.5" height="4" rx="1.2" />
      <rect x="5" y="8.5" width="2.5" height="7" rx="1" />
      <line x1="7.5" y1="12" x2="16.5" y2="12" />
      <rect x="16.5" y="8.5" width="2.5" height="7" rx="1" />
      <rect x="19" y="10" width="3.5" height="4" rx="1.2" />
    </svg>
  ),

  // Orthopedic Rehabilitation — a bone (classic medical icon)
  OR: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 6.5C5 5 5 3 6.5 2.5S9 3.5 8 5l11 11c1.5-1 3-.5 3.5 1S21.5 19 20 19.5s-2.5-.5-1.5-1.5L7.5 7c1 1.5.5 3-1 3S4 8.5 6.5 6.5z" />
    </svg>
  ),
};

// Inline SVG icon map for benefits
const BENEFIT_ICONS = {
  // Expert Guidance — a rosette / award badge
  EG: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="10" r="5" />
      <path d="M8.5 14.5L7 21l5-3 5 3-1.5-6.5" />
      <path d="M12 7.5v3l1.5 1" strokeWidth="1.4" />
    </svg>
  ),

  // Orthopedic Partnership — a handshake
  OS: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12l4-4 3 1 3-2 3 2 3-1 4 4" />
      <path d="M6 8l-4 4 4 5 2-1" />
      <path d="M18 8l4 4-4 5-2-1" />
      <path d="M9 9l3 3 3-3" />
    </svg>
  ),

  // Transparent Care — a shield with a check
  TC: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L4 5v7c0 4.5 3.5 8 8 9 4.5-1 8-4.5 8-9V5l-8-3z" />
      <polyline points="9 12 11 14 15 10" strokeWidth="1.8" />
    </svg>
  ),

  // Home Visits — a house outline with a cross/plus
  HV: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 11l9-8 9 8" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M10 20v-5h4v5" />
      {/* small medical plus inside house */}
      <path d="M12 13v3M10.5 14.5h3" strokeWidth="1.4" />
    </svg>
  ),

  // Personalised Recovery Plans — a clipboard with a checklist
  PR: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 2h6v4H9z" />
      <path d="M9 11l1.5 1.5 2.5-2.5" strokeWidth="1.5" />
      <line x1="14.5" y1="11" x2="17" y2="11" strokeWidth="1.4" />
      <path d="M9 15.5l1.5 1.5 2.5-2.5" strokeWidth="1.5" />
      <line x1="14.5" y1="15.5" x2="17" y2="15.5" strokeWidth="1.4" />
    </svg>
  ),
};

function ServiceCard({ title, description, icon }) {
  const svgIcon = SERVICE_ICONS[icon];

  return (
    <article className="service-card">
      <div className="icon-chip" aria-hidden="true">
        {svgIcon || icon}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;
export { SERVICE_ICONS, BENEFIT_ICONS };
