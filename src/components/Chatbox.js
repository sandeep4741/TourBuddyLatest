import React, { useState } from 'react';
import './Chatbox.css';
import emailjs from 'emailjs-com';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleToggleChatbox = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const message = e.target.elements.message.value.trim();

    if (name !== '' && email !== '' && message !== '') {
      // EmailJS configuration
      const serviceId = 'service_b97voh6'; // Replace with your actual service ID
      const templateId = 'template_ll16mr9'; // Replace with your actual template ID
      const userId = 'y-fy9UD-poxqklADW'; // Replace with your actual user ID
      

      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log('Email sent successfully:', response);
          setIsFormSubmitted(true); 
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  };

  const handleResetForm = () => {
    setIsFormSubmitted(false); // Reset the form submission status
    setIsOpen(false); // Close the chatbox
    setIsMinimized(true); // Minimize the chatbox to its initial position
  };

  return (
    <div className={`chatbox-container ${isOpen ? 'open' : ''} ${isMinimized ? 'minimized' : ''}`}>
      {isOpen ? (
        <div className="chatbox-content">
          <div className="abc">
            <h5>Welcome to TourBuddy</h5>
            <button className="close-button" onClick={handleToggleChatbox}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          {isFormSubmitted ? (
            <div className="success-message">
              <center style={{marginTop:'140px'}}>
              <p>Your Request has been sucessfully submitted , We will consider it</p>
              <button className="reset-button" onClick={handleResetForm}>Thank You</button></center>
            </div>
          ) : (
            <div className="chatbox-header">
              <form onSubmit={handleSendMessage}>
                <div className="form-group">
                  <h6>Name*</h6>
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <h6>Email*</h6>
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <h6>Message*</h6>
                  <textarea name="message" rows="4" placeholder="Your Message" required />
                </div>
                <button type="submit" className="close-button">
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      ) : (
        <div className="chatboxt" onClick={handleToggleChatbox}>
          <button className="open-button">
            <i className="fa-solid fa-envelope"></i>
          </button>
        </div>
      )}
    </div>
  );
};
export default Chatbox;