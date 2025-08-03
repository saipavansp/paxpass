import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* About Hero */}
      <section className="py-5 booking-banner" style={{ 
        background: 'linear-gradient(rgba(0, 86, 179, 0.7), rgba(0, 86, 179, 0.5)), url("https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80") center/cover no-repeat'
      }}>
        <div className="container text-center text-white">
          <h1 className="display-5 fw-bold">About PaxPass</h1>
          <p className="lead">Your trusted luggage assistance partner in India</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80" alt="PaxPass Team" className="img-fluid rounded-3 about-img" />
            </div>
            <div className="col-lg-6">
              <h2 className="display-6 fw-bold mb-4">Our Story</h2>
              <p className="lead mb-4">PaxPass was founded with a simple mission: to make travel more convenient and stress-free for everyone.</p>
              <p>We understand that handling luggage is one of the most challenging aspects of air travel. Heavy bags, navigating through traffic, and the stress of arriving on time can turn what should be an exciting journey into a hassle.</p>
              <p>That's why we created PaxPass - to eliminate this pain point and let travelers focus on what matters most: their journey and destination.</p>
              <p>Since our inception, we've helped thousands of travelers across India enjoy a smoother travel experience by taking care of their luggage logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1">
              <h2 className="display-6 fw-bold mb-4">Our Mission</h2>
              <p className="lead mb-4">To transform the travel experience by providing reliable, convenient, and secure luggage assistance services.</p>
              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <i className="fas fa-check-circle text-primary fs-2"></i>
                </div>
                <div className="ms-3">
                  <h5>Convenience</h5>
                  <p>We believe travel should be enjoyable from start to finish. By handling your luggage, we eliminate a major source of travel stress.</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <div className="flex-shrink-0">
                  <i className="fas fa-check-circle text-primary fs-2"></i>
                </div>
                <div className="ms-3">
                  <h5>Reliability</h5>
                  <p>Our professional team ensures your luggage is picked up and delivered on time, every time.</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <i className="fas fa-check-circle text-primary fs-2"></i>
                </div>
                <div className="ms-3">
                  <h5>Security</h5>
                  <p>Your belongings are treated with the utmost care and are fully insured during transit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Why Choose PaxPass</h2>
            <p className="lead">What sets us apart from the competition</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="fas fa-user-shield text-white fs-2"></i>
                  </div>
                  <h4>Trained Professionals</h4>
                  <p>Our staff undergoes rigorous training in luggage handling, customer service, and security protocols.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="fas fa-map-marked-alt text-white fs-2"></i>
                  </div>
                  <h4>Nationwide Coverage</h4>
                  <p>We operate in all major cities across India, serving both domestic and international travelers.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="fas fa-mobile-alt text-white fs-2"></i>
                  </div>
                  <h4>Real-time Tracking</h4>
                  <p>Track your luggage in real-time through our mobile app for complete peace of mind.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="fas fa-shield-alt text-white fs-2"></i>
                  </div>
                  <h4>Fully Insured</h4>
                  <p>Your luggage is insured during transit, giving you complete peace of mind.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="fas fa-clock text-white fs-2"></i>
                  </div>
                  <h4>Punctual Service</h4>
                  <p>We understand the importance of timing in travel and pride ourselves on our punctuality.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
                    <i className="fas fa-headset text-white fs-2"></i>
                  </div>
                  <h4>24/7 Customer Support</h4>
                  <p>Our dedicated customer support team is available round the clock to assist you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Meet Our Team</h2>
            <p className="lead">The people behind PaxPass</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="card-img-top" alt="Team Member" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Vikram Mehta</h5>
                  <p className="text-muted">Founder & CEO</p>
                  <p className="card-text">With over 15 years in the travel industry, Vikram founded PaxPass to solve a common pain point for travelers.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="card-img-top" alt="Team Member" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Neha Patel</h5>
                  <p className="text-muted">Operations Director</p>
                  <p className="card-text">Neha ensures that our operations run smoothly across all cities, maintaining our high service standards.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" className="card-img-top" alt="Team Member" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Arjun Singh</h5>
                  <p className="text-muted">Technology Head</p>
                  <p className="card-text">Arjun leads our tech team, developing innovative solutions for tracking and customer experience.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <img src="https://randomuser.me/api/portraits/women/28.jpg" className="card-img-top" alt="Team Member" />
                <div className="card-body text-center">
                  <h5 className="card-title mb-1">Priya Sharma</h5>
                  <p className="text-muted">Customer Relations</p>
                  <p className="card-text">Priya heads our customer support team, ensuring every client receives exceptional service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-5 booking-banner" style={{ 
        background: 'linear-gradient(rgba(0, 86, 179, 0.7), rgba(0, 86, 179, 0.5)), url("https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80") center/cover no-repeat'
      }}>
        <div className="container text-center text-white">
          <h2 className="display-5 fw-bold mb-4">Ready to Experience Hassle-Free Travel?</h2>
          <p className="lead mb-4">Join thousands of satisfied customers who trust PaxPass with their luggage</p>
          <Link to="/booking" className="btn btn-light btn-lg me-3">Book Now</Link>
          <Link to="/contact" className="btn btn-outline-light btn-lg">Contact Us</Link>
        </div>
      </section>
    </>
  );
};

export default About;