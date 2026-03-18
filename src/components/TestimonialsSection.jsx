const testimonials = [
  {
    name: "Gautum Bansal",
    label: "Post-Surgery Care",
    city: "Gurgaon",
    image: "/testimonial1.webp",
    quote:
      "Both Dr. Kinju and Dr Sakshi are quite knowledgeable, experienced and dedicated which helps patients like my mother in leading a better quality of life. Thank you team , Highly recommended",
  },
  {
    name: "Surya Shukla",
    label: "Knee Pain Recovery",
    image: "/surya.webp",
    city: "Gurgaon",
    quote: `Shoutout to Dr. Kinju Mishra for helping me in recovering with my injury.
Before starting treatment, I had consistent pain in my shin, around my knees, and along my IT band whenever I ran — and I wasn’t even able to play tennis because of it. After my sessions with Dr. Kinju Mishra, I’ve now been running 5Ks consistently for the past 15–20 days completely pain-free.
Big shoutout to him for the structured rehab, clear guidance, and getting me back to both running and tennis again.`,
  },
  {
    name: "Rassam Alkhrasani",
    label: "Elderly Mobility Support",
    image: "/rasam.webp",
    city: "Gurgaon",
    quote: `Shukran to Dr Mishra to helping my father to get recovered faster from knee injury after surgery . He is dedicated and profession in work and advised all the exercises for home
        Thank you to Best Doctor in 🇮🇳 I'm really happy for the treatment and happy to know him and friendship`,
  },
  {
    name: "Susanta Paul",
    city: "Delhi",
    label: "Back Pain",
    image: "susanta.webp",
    quote:
      "I had been dealing with lower back pain for long time, and nothing seemed to work—until I tried phototherapy here. After just a few sessions, the pain started easing, and now it’s completely gone. The therapy sessions were professional, attentive, and really knew what they were doing. Thank you Dr. Kinju and Dr. Sakshi for your efforts. Highly recommend to anyone looking for real relief!",
  },
  {
    name: "Aryamaan Sen",
    label: "Sport Injury",
    image: "aryaman.webp",
    city: "Gurgaon",
    quote:
      "Dr. Kinju has been an excellent physiotherapist for me. I suffered an ATFL tear on my ankle while playing football and through incredible coaching and support I was able to get back to walking and running in 2 months after surgery and will be able to play football again soon. He was there to help throughout at any time of the day if I needed anything and was able to cater to all problems and questions that I had. I would definitely recommend him for anyone going through sports injury/surgery recovery",
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
              className={`testimonial-card${index === 1 ? " featured" : ""}`}
            >
              <div className="testimonial-top">
                <div className="patient-id">
                  <span className="patient-avatar" aria-hidden="true">
                    <img src={item.image} alt="" loading="lazy" />
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
