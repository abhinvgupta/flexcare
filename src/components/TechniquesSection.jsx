const techniques = [
  {
    title: "Manual Therapy",
    description:
      "Hands-on treatment to ease joint stiffness, reduce pain, and improve natural movement patterns.",
    theme: "ocean",
  },
  {
    title: "Cupping Therapy",
    description:
      "A guided soft-tissue technique used to relieve muscular tightness and support circulation.",
    theme: "mint",
  },
  {
    title: "Dry Needling",
    description:
      "Precise trigger-point treatment that helps release deep muscle tension and restore comfort.",
    theme: "sky",
  },
  {
    title: "Electrotherapy / TENS",
    description:
      "Therapeutic electrical stimulation that can help manage pain and support active recovery.",
    theme: "warm",
  },
  {
    title: "Therapeutic Exercise",
    description:
      "Structured movement plans designed to rebuild strength, control, and confidence over time.",
    theme: "mint",
  },
  {
    title: "Stretching & Mobility Therapy",
    description:
      "Targeted mobility work to improve flexibility, joint range, and smoother everyday movement.",
    theme: "ocean",
  },
  {
    title: "Posture Correction",
    description:
      "Focused assessment and guided correction to reduce strain and improve long-term body mechanics.",
    theme: "sky",
  },
  {
    title: "Sports Injury Rehabilitation",
    description:
      "Progressive rehabilitation for strains, sprains, and return-to-sport readiness with safer pacing.",
    theme: "warm",
  },
];

function TechniquesSection() {
  return (
    <section className="section techniques-section" aria-labelledby="techniques-title">
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">Clinical Approach</p>
          <h2 id="techniques-title">Physiotherapy Techniques We Use</h2>
          <p>
            Proven treatment methods, selected carefully to match each patient&apos;s
            pain pattern, mobility goals, and stage of recovery.
          </p>
        </div>

        <div className="techniques-mosaic">
          {techniques.map((technique, index) => (
            <article
              key={technique.title}
              className={`technique-panel technique-panel--${technique.theme} technique-panel--${(index % 4) + 1}`}
            >
              <div className="technique-panel__veil" />
              <div className="technique-panel__content">
                <span className="technique-panel__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{technique.title}</h3>
                <p>{technique.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechniquesSection;
