import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Post-Surgery Rehabilitation',
    description:
      'Structured care to safely rebuild strength, flexibility, and confidence after surgery.',
    icon: 'SR',
  },
  {
    title: 'Knee & Joint Pain Therapy',
    description:
      'Targeted therapy plans to reduce pain, improve movement, and support daily comfort.',
    icon: 'KJ',
  },
  {
    title: 'Back & Neck Pain Therapy',
    description:
      'Evidence-based techniques to relieve stiffness and restore healthy posture and mobility.',
    icon: 'BN',
  },
  {
    title: 'Stroke Rehabilitation',
    description:
      'Step-by-step support focused on balance, coordination, and functional independence.',
    icon: 'ST',
  },
  {
    title: 'Elderly Mobility Support',
    description:
      'Gentle physiotherapy for fall prevention, better mobility, and safer movement at home.',
    icon: 'EM',
  },
  {
    title: 'Sports Injury Recovery',
    description:
      'Progressive recovery plans for strains, sprains, and return-to-activity readiness.',
    icon: 'SP',
  },
  {
    title: 'Home Exercise Guidance',
    description:
      'Simple, personalised exercise routines to maintain progress between sessions.',
    icon: 'HE',
  },
  {
    title: 'Orthopedic Rehabilitation',
    description:
      'Holistic rehabilitation for orthopedic conditions with regular progress tracking.',
    icon: 'OR',
  },
];

function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Our Expertise</p>
          <h2>Our Physiotherapy Services</h2>
          <p>
            We provide outcome-focused home physiotherapy with careful
            assessment, guided sessions, and clear progression plans.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
