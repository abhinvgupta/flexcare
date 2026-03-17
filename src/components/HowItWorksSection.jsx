const steps = [
  {
    title: "Book an Appointment",
    description:
      "Choose your preferred service, share your details, and schedule a convenient time.",
  },
  {
    title: "Physiotherapist Visits Your Home",
    description:
      "Our physiotherapist visits your home and performs a detailed mobility assessment.",
  },
  {
    title: "Personalised Treatment Plan",
    description:
      "A recovery plan is created with exercises, therapy goals, and clear next steps.",
  },
  {
    title: "Team Review",
    description:
      "Our clinical team reviews the plan to ensure quality, consistency, and safer care.",
  },
];

function HowItWorksSection() {
  return (
    <section className="section process-section" id="how-it-works">
      <div className="process-glow process-glow-a" aria-hidden="true" />
      <div className="process-glow process-glow-b" aria-hidden="true" />
      <div className="container process-shell">
        <div className="section-heading center">
          <p className="eyebrow">Simple Process</p>
          <h2>How It Works</h2>
          <p>
            A clear four-step journey designed for safe, structured recovery at
            home.
          </p>
        </div>
        <div className="journey-layout">
          <ol className="journey-flow">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className={`journey-step journey-step-${index + 1}`}
              >
                <div className="journey-marker" aria-hidden="true">
                  <span className="journey-circle">
                    <span className="journey-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                </div>
                <div className="journey-copy">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
