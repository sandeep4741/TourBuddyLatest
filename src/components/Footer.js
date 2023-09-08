import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaHome, FaList, FaAddressBook } from 'react-icons/fa';
const Footer = () => {
  const phoneNumber = "+1 123-456-7890"; // Replace with your phone number
  const emailAddress = "c@tourbuddy.com"; // Replace with your email address
  const address = "Floor: 5, Fairfield by Marriott, Road No. 2, Hyderabad, Telangana 500032"; // Replace with your address

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/"><FaHome /> Home</a></li>
              <li><a href="/states"><FaList /> States</a></li>
              <li><a href="/contact"><FaAddressBook /> Contact</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Additional</h5>
            <ul className="footer-links">
              <li><a href="/explore-destination">Explore Destination</a></li>
              <li><a href="/plan-your-trip">Plan Your Trip</a></li>
              <li><a href="/customer-reviews-and-testimonials">Customer Reviews and Testimonials</a></li>
            </ul>
          </div>
          <div className="col">
            <h5>Subscribe</h5>
            <form className="footer-email-signup">
              <input type="email" placeholder="Enter your email...." className="email-input" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className="col">
            <h5>Contact</h5>
            <ol className="footer-links">
              <li><a href={`tel:${phoneNumber}`}><FaPhone /> {phoneNumber}</a></li>
              <li><a href={`mailto:${emailAddress}`}><FaEnvelope /> {emailAddress}</a></li>
              <li><a href="#"><FaMapMarkerAlt /> {address}</a></li>
            </ol>
          </div>
        </div>
      </div>
      <h5 style={{textAlign:'center'}}>Follow Us</h5>
      <div className="social-icons">
        <a href="https://www.whatsapp.com" className="social-icon whatsapp"><i className="fab fa-whatsapp"></i></a>
        <a href="https://www.twitter.com" className="social-icon twitter"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com" className="social-icon instagram"><i className="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com" className="social-icon facebook"><i className="fab fa-facebook"></i></a>
        <a href="https://www.youtube.com" className="social-icon youtube"><i className="fab fa-youtube"></i></a>
        <a href="https://www.linkedin.com" className="social-icon linkedin"><i className="fab fa-linkedin"></i></a>
      </div>
      <div>
        <div className="footer-bottom">
          <p className="text-center">&copy; {new Date().getFullYear()} TourBuddy.com. Developed By Challengers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
