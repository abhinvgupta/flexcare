const benefits = [
  {
    title: 'Expert Physiotherapist Guidance',
    description:
      'Experienced professionals deliver focused sessions with clear clinical reasoning.',
    icon: 'EG',
  },
  {
    title: 'Partnership with Orthopedic Specialists',
    description:
      'Collaborative care approach to ensure treatment aligns with orthopedic recommendations.',
    icon: 'OS',
  },
  {
    title: 'Transparent and Trustworthy Care',
    description:
      'No hidden promises. We explain treatment goals, timelines, and progress openly.',
    icon: 'TC',
  },
  {
    title: 'Convenient Home Visits',
    description:
      'Comfortable, stress-free physiotherapy sessions at home for better consistency.',
    icon: 'HV',
  },
  {
    title: 'Personalised Recovery Plans',
    description:
      'Every treatment plan is adapted to your condition, pace, and long-term mobility goals.',
    icon: 'PR',
  },
];

function WhyChooseUsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Our Promise</p>
          <h2>Why Choose Us</h2>
          <p>
            We combine clinical depth with compassionate home care so recovery
            feels structured, reassuring, and practical.
          </p>
        </div>
        <div className="why-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="why-card">
              <div className="icon-chip" aria-hidden="true">
                {benefit.icon}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
