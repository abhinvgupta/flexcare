import CTASection from '../components/CTASection';

const aboutImage =
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1400&q=80';

function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">About FlexCare</p>
          <h1>Trusted Physiotherapy, Designed for Home Comfort</h1>
          <p>
            FlexCare was built to make quality physiotherapy more accessible for
            families who prefer safe, guided treatment at home.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-layout">
          <div className="about-media">
            <img
              src={aboutImage}
              alt="Physiotherapist guiding an elderly patient in a home session"
              loading="lazy"
            />
          </div>
          <div className="about-copy">
            <h2>Our Mission</h2>
            <p>
              We help patients recover with confidence through evidence-based
              physiotherapy, clear communication, and compassionate care at
              home.
            </p>
            <p>
              Every treatment plan is personalised to your condition and daily
              routine, then reviewed by our team to maintain quality and
              consistency.
            </p>
            <ul className="about-points">
              <li>Patient comfort and trust in every session.</li>
              <li>Structured home-care plans with measurable progress.</li>
              <li>Expert physiotherapists working with team review.</li>
            </ul>
          </div>
        </div>

        <div className="container about-values">
          <article className="about-value">
            <h3>Why Home Physiotherapy Matters</h3>
            <p>
              Care at home improves adherence, reduces travel stress, and
              supports recovery in a familiar environment.
            </p>
          </article>
          <article className="about-value">
            <h3>Clinical Quality</h3>
            <p>
              Our protocols focus on safe progression, mobility outcomes, and
              practical day-to-day function.
            </p>
          </article>
          <article className="about-value">
            <h3>Human, Credible Care</h3>
            <p>
              We combine professional standards with empathetic communication so
              patients and families feel fully supported.
            </p>
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default AboutPage;
