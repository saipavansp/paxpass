import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    alert('Your message has been sent! We will get back to you shortly.');
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {/* Contact Hero */}
      <section className="py-5 booking-banner" style={{ 
        background: 'linear-gradient(rgba(0, 86, 179, 0.7), rgba(0, 86, 179, 0.5)), url("../public/images/family.jpg") center/cover no-repeat'
      }}>
        <div className="container text-center text-white">
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <p className="lead">We're here to help with any questions or concerns</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="contact-info">
                <div className="text-center">
                  <div className="contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h3 className="h4">Phone</h3>
                  <p className="mb-0">+91 8328367636</p>
                  <p className="text-light">Available 24/7</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="text-center">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h3 className="h4">Email</h3>
                  <p className="mb-0">support@paxpass.in</p>
                  <p className="text-light">We respond within 24 hours</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-info">
                <div className="text-center">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h3 className="h4">Office</h3>
                  <p className="mb-0">Mumbai, India</p>
                  <p className="text-light">Serving all major cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-4 p-md-5">
                  <h2 className="text-center mb-4">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <input 
                          type="tel" 
                          className="form-control" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Your Message</label>
                        <textarea 
                          className="form-control" 
                          id="message" 
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Frequently Asked Questions</h2>
            <p className="lead">Find quick answers to common questions</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How far in advance should I book your service?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We recommend booking at least 24 hours in advance to ensure availability. However, for peak travel seasons or holidays, booking 48-72 hours ahead is advisable.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What happens if my flight is delayed or rescheduled?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      If your flight schedule changes, please contact us as soon as possible. We'll adjust your pickup or delivery time accordingly at no extra charge, provided you notify us at least 3 hours before the originally scheduled time.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Is my luggage insured during transit?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, all luggage is insured up to ₹10,000 per bag during transit as part of our standard service. Additional insurance coverage can be purchased during the booking process if needed.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Which cities do you currently serve?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      We currently operate in Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Pune, and Ahmedabad. We're continuously expanding to more cities across India.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                      How do I track my luggage?
                    </button>
                  </h2>
                  <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Once your booking is confirmed, you'll receive a tracking link via SMS and email. This link allows you to track your luggage in real-time through our secure tracking system.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Our Coverage</h2>
            <p className="lead">Serving major cities across India</p>
          </div>
          <div className="ratio ratio-21x9" style={{ maxHeight: '400px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30703867.071679905!2d64.40903249738913!3d20.04915895569306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="PaxPass Service Coverage Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;