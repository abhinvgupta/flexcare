const physiotherapists = [
  {
    name: "Dr. Priya Sharma",
    qualification: "BPT, MPT (Orthopaedics)",
    image: "/testimonial1.webp",
    description:
      "Specializes in back pain, posture correction, and home rehabilitation. Known for a patient-first approach and personalized recovery plans.",
  },
  {
    name: "Dr. Rohan Mehta",
    qualification: "BPT, Sports Rehabilitation",
    image: "/surya.webp",
    description:
      "Focuses on sports injury recovery, mobility improvement, and strength restoration. Helps patients return confidently to their daily activities.",
  },
  {
    name: "Dr. Neha Verma",
    qualification: "BPT, Geriatric Physiotherapy",
    image: "/susanta.webp",
    description:
      "Experienced in supporting elderly patients with balance, joint pain, and movement challenges through gentle and effective home-based therapy.",
  },
  {
    name: "Dr. Arjun Khanna",
    qualification: "BPT, Manual Therapy Specialist",
    image: "/aryaman.webp",
    description:
      "Works with patients dealing with neck pain, shoulder stiffness, and musculoskeletal issues using hands-on techniques and guided exercises.",
  },
];

function TeamSection() {
  return (
    <section className="section team-section" aria-labelledby="team-title">
      <div className="container">
        <div className="section-heading center">
          <p className="eyebrow">Care Team</p>
          <h2 id="team-title">Meet the Physiotherapists</h2>
          <p>
            Our experienced team of physiotherapists is dedicated to delivering
            compassionate, personalized care in the comfort of your home.
          </p>
        </div>

        <p className="team-trust-line">
          Certified professionals. Personalized care. Trusted home visits.
        </p>

        <div className="team-grid">
          {physiotherapists.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-card__media">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
              <div className="team-card__body">
                <p className="team-card__qualification">{member.qualification}</p>
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
