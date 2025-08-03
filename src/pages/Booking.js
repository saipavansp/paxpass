import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'home-to-airport',
    airline: 'Indigo',
    flightNumber: '',
    airport: 'RGIA',
    date: '',
    timeSlot: '',
    numBags: 2,
    pnrNumber: '',
    promoCode: '',
    totalPrice: 999
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'numBags') {
      const numBags = parseInt(value);
      const basePrice = 999; // Base price for 2 bags
      let totalPrice = basePrice;
      
      // Add 300 for each additional bag beyond 2, up to 10 bags total
      if (numBags > 2) {
        totalPrice += (numBags - 2) * 300;
      }
      
      setFormData({
        ...formData,
        [name]: numBags,
        totalPrice
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    alert('Booking submitted successfully! We will contact you shortly to confirm your booking.');
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* Booking Hero */}
      <section className="py-5 booking-banner" style={{ 
        background: 'linear-gradient(rgba(0, 86, 179, 0.7), rgba(0, 86, 179, 0.5)), url("https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80") center/cover no-repeat'
      }}>
        <div className="container text-center text-white">
          <h1 className="display-5 fw-bold">Book Our Service</h1>
          <p className="lead">Let us handle your luggage while you enjoy a stress-free journey</p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="booking-form">
                <h2 className="text-center mb-4">Book Your Luggage Service</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <h4>Personal Information</h4>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Full Name</label>
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
                        <label htmlFor="email" className="form-label">Email</label>
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
                        <label htmlFor="address" className="form-label">Address</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="address" 
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4>Service Details</h4>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="serviceType" className="form-label">Service Type</label>
                        <select 
                          className="form-select" 
                          id="serviceType" 
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="home-to-airport">Home to Airport</option>
                          <option value="airport-to-home">Airport to Home</option>
                        </select>
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="airline" className="form-label">Select Airline</label>
                        <select 
                          className="form-select" 
                          id="airline" 
                          name="airline"
                          value={formData.airline}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="Indigo">Indigo</option>
                          <option value="Air India">Air India</option>
                          <option value="SpiceJet">SpiceJet</option>
                          <option value="Vistara">Vistara</option>
                          <option value="GoAir">GoAir</option>
                          <option value="AirAsia">AirAsia</option>
                        </select>
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="flightNumber" className="form-label">Enter Flight Number</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="flightNumber" 
                          name="flightNumber"
                          value={formData.flightNumber}
                          onChange={handleInputChange}
                          required 
                          placeholder="e.g. 6E-123"
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="airport" className="form-label">Select Airport</label>
                        <select 
                          className="form-select" 
                          id="airport" 
                          name="airport"
                          value={formData.airport}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="RGIA">RGIA (Rajiv Gandhi International Airport)</option>
                        </select>
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="date" className="form-label">Select a date</label>
                        <input 
                          type="date" 
                          className="form-control" 
                          id="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required 
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="timeSlot" className="form-label">Pick Time slot</label>
                        <select 
                          className="form-select" 
                          id="timeSlot" 
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Choose an option</option>
                          <option value="6AM-9AM">6:00 AM - 9:00 AM</option>
                          <option value="9AM-12PM">9:00 AM - 12:00 PM</option>
                          <option value="12PM-3PM">12:00 PM - 3:00 PM</option>
                          <option value="3PM-6PM">3:00 PM - 6:00 PM</option>
                          <option value="6PM-9PM">6:00 PM - 9:00 PM</option>
                          <option value="9PM-12AM">9:00 PM - 12:00 AM</option>
                        </select>
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="address" className="form-label">Pick up Address</label>
                        <textarea 
                          className="form-control" 
                          id="address" 
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          rows="3"
                          required 
                        ></textarea>
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="numBags" className="form-label">Number of Bags</label>
                        <select 
                          className="form-select" 
                          id="numBags" 
                          name="numBags"
                          value={formData.numBags}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Choose an option</option>
                          {[...Array(10)].map((_, i) => (
                            <option key={i+1} value={i+1}>{i+1} {i === 0 ? 'bag' : 'bags'}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="pnrNumber" className="form-label">Enter PNR Number</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="pnrNumber" 
                          name="pnrNumber"
                          value={formData.pnrNumber}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label htmlFor="promoCode" className="form-label">Promo Code</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="promoCode" 
                          name="promoCode"
                          value={formData.promoCode}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="col-md-6">
                        <label className="form-label">Total Price</label>
                        <div className="input-group">
                          <span className="input-group-text">₹</span>
                          <input 
                            type="text" 
                            className="form-control" 
                            value={formData.totalPrice}
                            readOnly 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="alert alert-info mt-3">
                      <i className="fas fa-info-circle me-2"></i>
                      Note: We accept Booking at least 5 hours prior to your flight.
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="termsCheck" required />
                      <label className="form-check-label" htmlFor="termsCheck">
                        I agree to the <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">terms and conditions</a>
                      </label>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg">Book Now</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Booking Information</h3>
                  <p className="card-text">Our standard package includes:</p>
                  <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Base Price (up to 2 bags)
                      <span>₹999</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Each Additional Bag
                      <span>₹300</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Maximum Bags per Booking
                      <span>10</span>
                    </li>
                  </ul>
                  <h5>Important Notes:</h5>
                  <ul>
                    <li>Please book at least 24 hours in advance</li>
                    <li>Our team will contact you to confirm your booking</li>
                    <li>Ensure someone is available at the pickup location</li>
                    <li>Have your ID ready for verification</li>
                  </ul>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-body">
                  <h3 className="card-title">Need Help?</h3>
                  <p className="card-text">Our customer support team is available 24/7 to assist you with your booking.</p>
                  <div className="d-grid">
                    <a href="tel:+918328367636" className="btn btn-outline-primary mb-2">
                      <i className="fas fa-phone me-2"></i> +91 8328367636
                    </a>
                    <a href="mailto:support@paxpass.in" className="btn btn-outline-primary">
                      <i className="fas fa-envelope me-2"></i> support@paxpass.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Modal */}
      <div className="modal fade" id="termsModal" tabIndex="-1" aria-labelledby="termsModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="termsModalLabel">Terms and Conditions</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <h6>1. Service Agreement</h6>
              <p>By booking with PaxPass, you agree to these terms and conditions. Our service includes the pickup and delivery of luggage between your specified location and the airport.</p>
              
              <h6>2. Booking and Payment</h6>
              <p>All bookings must be made at least 24 hours in advance. Payment is required at the time of booking. We accept all major credit cards and UPI payments.</p>
              
              <h6>3. Cancellation Policy</h6>
              <p>Cancellations made 12 hours or more before the scheduled pickup time will receive a full refund. Cancellations made less than 12 hours before will incur a 50% fee.</p>
              
              <h6>4. Luggage Restrictions</h6>
              <p>We accept standard travel luggage only. Prohibited items include hazardous materials, perishables, valuables (jewelry, cash, etc.), and illegal items.</p>
              
              <h6>5. Insurance</h6>
              <p>Your luggage is insured up to ₹10,000 per bag during transit. Additional insurance can be purchased during booking.</p>
              
              <h6>6. Liability</h6>
              <p>PaxPass is not responsible for delays caused by traffic, weather conditions, or other factors beyond our control. We will make every effort to deliver your luggage on time.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;