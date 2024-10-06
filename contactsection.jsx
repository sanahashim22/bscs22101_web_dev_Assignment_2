import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>

      <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 0, width: '100%', height: '400px' }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <ContactInfo />
          </div>

          <div className="col-lg-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = () => {
    return (
      <>
        <InfoItem icon="bi-geo-alt" title="Location" content="A108 Adam Street, New York, NY 535022" />
        <InfoItem icon="bi-telephone" title="Open Hours" content="Monday-Saturday: 11:00 AM - 2300 PM" />
        <InfoItem icon="bi-telephone" title="Call Us" content="+1 5589 55488 55" />
        <InfoItem icon="bi-envelope" title="Email Us" content="info@example.com" />
      </>
    );
  };
  
  const InfoItem = ({ icon, title, content }) => {
    return (
      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
        <i className={`bi ${icon} flex-shrink-0`}></i>
        <div>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
  };
  
  const ContactForm = () => {
    return (
      <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">
          <div className="col-md-6">
            <input type="text" name="name" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" name="email" placeholder="Your Email" required />
          </div>
          <div className="col-md-12">
            <input type="text" className="form-control" name="subject" placeholder="Subject" required />
          </div>
          <div className="col-md-12">
            <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
          </div>
          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>
    );
  };

export default ContactSection;