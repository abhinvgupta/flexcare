const testimonials = [
  {
    name: 'Priya Nair',
    label: 'Knee Pain Recovery',
    initials: 'PN',
    city: 'Bengaluru',
    quote:
      'The therapist explained every step clearly and helped me regain confidence while walking at home.',
  },
  {
    name: 'Rakesh Menon',
    label: 'Post-Surgery Care',
    initials: 'RM',
    city: 'Chennai',
    quote:
      'Sessions were punctual, professional, and very structured. I could feel progress week by week.',
  },
  {
    name: 'Anita Sharma',
    label: 'Elderly Mobility Support',
    initials: 'AS',
    city: 'Pune',
    quote:
      'My mother felt comfortable throughout the sessions. The home visits made regular care easy for our family.',
  },
];

function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">Patient Feedback</p>
          <h2>What Our Patients Say</h2>
          <p>
            Families trust us for respectful care, measurable progress, and
            consistent follow-up.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <figure
              key={item.name}
              className={`testimonial-card${index === 1 ? ' featured' : ''}`}
            >
              <div className="testimonial-top">
                <div className="patient-id">
                  <span className="patient-avatar" aria-hidden="true">
                    {item.initials}
                  </span>
                  <figcaption>
                    <strong>{item.name}</strong>
                    <span>{item.city}</span>
                  </figcaption>
                </div>
                <p className="testimonial-tag">{item.label}</p>
              </div>

              <blockquote>{item.quote}</blockquote>

              <div className="testimonial-footer">
                <span className="rating" aria-label="5 star rating">
                  ★★★★★
                </span>
                <span className="verified">Verified Patient</span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
