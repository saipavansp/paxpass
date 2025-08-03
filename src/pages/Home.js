import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{ 
        background: 'linear-gradient(rgba(0, 86, 179, 0.7), rgba(0, 86, 179, 0.5)), url("/images/main.jpg") center/cover no-repeat'
      }}>
        <div className="container">
          <h1>Travel Light, Travel Right</h1>
          <p>Let PaxPass handle your luggage while you focus on your journey. We pick up your bags from home and deliver them to the airport, and vice versa.</p>
          <Link to="/booking" className="btn btn-light btn-lg">Book Now</Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Our Services</h2>
            <p className="lead">Making your travel experience seamless and stress-free</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card service-card h-100">
                <div className="card-body text-center p-4">
                  <div className="service-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <h3 className="card-title h4">Home to Airport</h3>
                  <p className="card-text">We pick up your luggage from your doorstep and deliver it to your designated airport, allowing you to travel light and stress-free.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100">
                <div className="card-body text-center p-4">
                  <div className="service-icon">
                    <i className="fas fa-plane"></i>
                  </div>
                  <h3 className="card-title h4">Airport to Home</h3>
                  <p className="card-text">Skip the hassle of carrying heavy bags after a tiring flight. We'll pick up your luggage at the airport and deliver it to your home.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card service-card h-100">
                <div className="card-body text-center p-4">
                  <div className="service-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3 className="card-title h4">Business Travel</h3>
                  <p className="card-text">Designed for busy professionals who value their time. Focus on your business while we handle your luggage logistics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">How It Works</h2>
            <p className="lead">Simple, secure, and convenient</p>
          </div>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-calendar-alt text-white fs-1"></i>
                </div>
                <h4>Book Online</h4>
                <p>Schedule your pickup and delivery through our easy-to-use booking system.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-box text-white fs-1"></i>
                </div>
                <h4>Pack Your Bags</h4>
                <p>Prepare your luggage as you normally would for your flight.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-truck text-white fs-1"></i>
                </div>
                <h4>We Collect</h4>
                <p>Our professional team picks up your bags from your location.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                  <i className="fas fa-check-circle text-white fs-1"></i>
                </div>
                <h4>Travel Hassle-Free</h4>
                <p>Enjoy your journey while we ensure your luggage reaches the destination.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Simple Pricing</h2>
            <p className="lead">Affordable rates for everyone</p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card text-center">
                <h3 className="mb-4">Standard Package</h3>
                <div className="price mb-3">₹999</div>
                <p className="text-muted mb-4">For up to 2 bags</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Door to airport/airport to door</li>
                  <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Up to 2 standard bags</li>
                  <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Real-time tracking</li>
                  <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Insurance coverage</li>
                </ul>
                <Link to="/booking" className="btn btn-primary">Book Now</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-card text-center">
                <h3 className="mb-4">Additional Bags</h3>
                <div className="price mb-3">₹300</div>
                <p className="text-muted mb-4">Per extra bag</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Add to standard package</li>
                  <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Up to 8 additional bags</li>
                  <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Same service quality</li>
                  <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Same insurance coverage</li>
                </ul>
                <Link to="/booking" className="btn btn-primary">Book Now</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p>* Maximum total of 10 bags per booking</p>
          </div>
        </div>
      </section>

      {/* Family Travel Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="/images/family.jpg" alt="Family ready for travel" className="img-fluid rounded-3" />
            </div>
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Family Travel Made Easy</h2>
              <p className="lead">Traveling with family shouldn't be stressful. Let us handle the heavy lifting.</p>
              <p>With PaxPass, families can focus on creating memories instead of managing multiple pieces of luggage. Our service is especially beneficial for families with young children, elderly members, or anyone who wants to make their journey more comfortable.</p>
              <Link to="/booking" className="btn btn-primary mt-3">Book For Your Family</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">What Our Customers Say</h2>
            <p className="lead">Don't just take our word for it</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="mb-3">
                  <h5 className="mb-0">Varun</h5>
                </div>
                <p className="mb-0">
                  <i className="fas fa-quote-left quote-icon me-2"></i>
                  Thanks to PaxPass, my luggage journeyed effortlessly from check-out to boarding, freeing me to relish every moment.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="mb-3">
                  <h5 className="mb-0">Amit Sheth</h5>
                </div>
                <p className="mb-0">
                  <i className="fas fa-quote-left quote-icon me-2"></i>
                  Traveling has never been this easy! PaxPass took care of my luggage from check-out to boarding, allowing me to enjoy every moment without the weight of my bags. Thank you, PaxPass.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="mb-3">
                  <h5 className="mb-0">Vaishali Neotia</h5>
                </div>
                <p className="mb-0">
                  <i className="fas fa-quote-left quote-icon me-2"></i>
                  I'm very happy with paxpass service. They picked up my lost luggage and dropped it home on a working day. Simple and hassle free. Thank you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 booking-banner" style={{ 
        background: 'linear-gradient(rgba(0, 86, 179, 0.7), rgba(0, 86, 179, 0.5)), url("/images/main.jpg") center/cover no-repeat'
      }}>
        <div className="container text-center text-white">
          <h2 className="display-5 fw-bold mb-4">Ready to Travel Stress-Free?</h2>
          <p className="lead mb-4">Book our luggage assistance service today and experience hassle-free travel</p>
          <Link to="/booking" className="btn btn-light btn-lg">Book Now</Link>
        </div>
      </section>
    </>
  );
};

export default Home;