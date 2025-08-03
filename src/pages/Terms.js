import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <>
      {/* Terms Hero */}
      <section className="py-5 booking-banner" style={{ 
        background: 'linear-gradient(rgba(0, 86, 179, 0.7), rgba(0, 86, 179, 0.5)), url("https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80") center/cover no-repeat'
      }}>
        <div className="container text-center text-white">
          <h1 className="display-5 fw-bold">Terms and Conditions</h1>
          <p className="lead">Please read these terms carefully before using our services</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <h2 className="mb-4">Paxpass Service Definitions</h2>
                  
                  <div className="mb-4">
                    <h5>Airport Transfer</h5>
                    <p>This service transports your belongings between the city address and the designated airport gate, within the departure/arrival area. The pick-up and drop-off addresses can be local.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Airport Delivery Address</h5>
                    <p>This refers to the specific gate, counter designated for baggage drop-off/pick-up within the airport's departure/arrival area.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>City Delivery Address</h5>
                    <p>This refers to the designated address within the service area where your belongings will be delivered or collected.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Booking/Order/Package</h5>
                    <p>This refers to your request for Paxpass services through our website as confirmed by our records.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Website/App</h5>
                    <p>This encompasses Paxpass's official website.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Charges</h5>
                    <p>These are the fees and amounts levied for transporting your Package between the Airport/City based on the weight and type of Package, as per the published rate card on the Website.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Conditions</h5>
                    <p>These refer to the Terms and Conditions of Carriage, which incorporate any agreements, laws, and conventions explicitly mentioned herein and updated by Paxpass periodically.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Consignment/Order Number</h5>
                    <p>This unique number assigned to your Booking allows you to track your Package status through the Paxpass tracking system and identifies your Package for delivery confirmation.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Customer/User/You</h5>
                    <p>This refers to the individual who makes a Booking through our Website/App, either directly for themselves or on behalf of another person or alliance partner.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Delivery Address</h5>
                    <p>This encompasses both the Airport/City Delivery Address and the Domestic/Outstation Delivery Address.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Domestic/Outstation Delivery Address</h5>
                    <p>This refers to the delivery address within India, specifically within the service area, that has been validated by Paxpass for Package acceptance under agreed-upon terms.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Distress Days</h5>
                    <p>These are designated days that may create difficulties for the general public, including both Users and Paxpass.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Package</h5>
                    <p>This refers to any parcel, baggage, luggage, goods, or individual item owned or booked by the Customer and transported by Paxpass under these terms. It excludes explosives, harmful goods, perishable items, and any other items prohibited by the International Air Transport Association (IATA) Rules. These prohibited items are detailed on the following link, which is subject to change: <a href="http://www.iata.org/publications/dgr/Pages/index.aspx" target="_blank" rel="noopener noreferrer">http://www.iata.org/publications/dgr/Pages/index.aspx</a></p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Prohibited Items</h5>
                    <p>These include any items deemed potentially dangerous, illegal to possess in India, livestock, foodstuffs, perishable items, and any other items prohibited by IATA Rules. The detailed list of prohibited items can be found on the following link, which is subject to change: <a href="http://www.iata.org/publications/dgr/Pages/index.aspx" target="_blank" rel="noopener noreferrer">http://www.iata.org/publications/dgr/Pages/index.aspx</a></p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Reschedule Delivery</h5>
                    <p>This refers to a request from the User to deliver the Package to a different location or time after it has been picked up by Paxpass. This request requires reasonable notice from the User. Paxpass may also initiate a reschedule request on behalf of the User if no response is received at the time of delivery. Evidence of contact and communication attempts will be posted to the User through the app/web interface.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Scheduled Customer Drop-off Time</h5>
                    <p>This refers to the pre-arranged time for the Customer to deliver the Package to Paxpass, as specified in the Booking. This can be a specific time or a designated time slot.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Scheduled Delivery Time</h5>
                    <p>This refers to the pre-arranged time for Paxpass to deliver the Package to the designated Domestic/Outstation Delivery Address or Airport/City Delivery Address, as specified in the Booking. This can be a specific time or a designated time slot.</p>
                  </div>
                  
                  <div className="mb-4">
                    <h5>Sealed Package</h5>
                    <p>This refers to a Package that has been secured by the Customer and sealed with a tamper-evident bag by a Paxpass representative. This process is documented by Paxpass or its agents during the pick-up procedure in accordance with our security protocols, which are subject to change.</p>
                  </div>

                  <div className="alert alert-info mt-5">
                    <p className="mb-0">For any questions regarding our terms and conditions, please <Link to="/contact">contact us</Link>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;