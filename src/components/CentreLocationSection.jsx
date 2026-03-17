const centreImage = "/centre.webp";

function CentreLocationSection() {
  const centreAddress =
    "6th floor, Speciality Clinic, Nirvana Courtyard, C606, Nirvana Country, Sector 50, Gurugram, Haryana 122018";
  const centreMapQuery =
    "Dr+Kinju+Mishra+Physiotherapist+Sports+Injury+Specialist+Shoulder+%26+Knee+Injury+Acl+Injury+Specialised,+6th+floor,+Speciality+Clinic,+Nirvana+Courtyard,+C606,+Nirvana+Country,+Sector+50,+Gurugram,+Haryana+122018";

  return (
    <section className="section centre-location">
      <div className="container">
        <div className="centre-location__header">
          <p className="eyebrow">Visit Our Centre</p>
          <h2>Our Physiotherapy Centre</h2>
          <p>
            Patients can also visit our Gurgaon centre for guided sessions,
            rehabilitation support, and in-person therapy care.
          </p>
        </div>

        <div className="centre-location__layout">
          <div className="centre-location__map-wrap">
            <iframe
              className="centre-location__map"
              title="HomeMotion Physiotherapy Centre Gurgaon map"
              src={`https://www.google.com/maps?q=${centreMapQuery}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="centre-location__content">
            <div className="centre-location__image-wrap">
              <img
                src={centreImage}
                alt="Interior of a modern physiotherapy treatment centre"
                className="centre-location__image"
              />
            </div>

            <div className="centre-location__info">
              <div className="centre-location__item">
                <span>Centre Name</span>
                <strong>NIRVANA SPECIALITY CLINICS</strong>
              </div>

              <div className="centre-location__item">
                <span>Location</span>
                <strong>Gurgaon, Haryana</strong>
              </div>

              <div className="centre-location__item">
                <span>Address</span>
                <strong>{centreAddress}</strong>
              </div>

              <div className="centre-location__item">
                <span>Opening Hours</span>
                <strong>Mon - Sat | 8:00 AM - 8:00 PM</strong>
              </div>
            </div>

            <div className="centre-location__services">
              <p className="centre-location__services-label">
                Services at centre
              </p>
              <ul>
                <li>Physiotherapy sessions</li>
                <li>Rehabilitation programs</li>
                <li>Orthopedic therapy</li>
              </ul>
            </div>

            <div className="centre-location__actions">
              <a
                className="btn centre-location__secondary"
                href={`https://www.google.com/maps?q=${centreMapQuery}`}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
              <a
                className="btn btn-primary centre-location__primary"
                href="#contact-form"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CentreLocationSection;
