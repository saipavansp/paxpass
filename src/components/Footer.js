import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="footer-heading">PaxPass</h5>
            <p>Your trusted airport luggage assistance service in India. Making travel hassle-free since 2023.</p>
            <div className="mt-4">
              <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/booking" className="footer-link">Book Now</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/terms" className="footer-link">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="footer-heading">Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/booking" className="footer-link">Home to Airport</Link></li>
              <li><Link to="/booking" className="footer-link">Airport to Home</Link></li>
              <li><Link to="/booking" className="footer-link">Business Travel</Link></li>
              <li><Link to="/booking" className="footer-link">Family Travel</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="fas fa-phone me-2"></i> +91 8328367636
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope me-2"></i> support@paxpass.in
              </li>
              <li className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i> Hyderabad, India
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-darker py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} PaxPass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;