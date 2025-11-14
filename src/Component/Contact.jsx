import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div id="contact" className="contact-section">
      <div className="elbanna-heading">
        <h1 className="elbanna-main-title">Let's Work Together</h1>
        <p className="elbanna-sub-title">Have a project in mind? Get in touch.</p>
      </div>

      <div className="elbanna-info-side">
        <div className="elbanna-box">
          <h3>Email</h3>
          <a href="mailto:habiba@example.com">habiba@example.com</a>
        </div>

        <div className="elbanna-box">
          <h3>Phone</h3>
          <a href="tel:+201234567890">+20 123 456 7890</a>
        </div>

        <div className="elbanna-box">
          <h3>Availability</h3>
          <p>Open for opportunities</p>
        </div>
      </div>

      <div className="bigcontener">
        <form onSubmit={handleSubmit}>
          <div className="elbanna-input-wrapper">
            <label htmlFor="name" className="elbanna-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="elbanna-input"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="elbanna-input-wrapper">
            <label htmlFor="email" className="elbanna-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="elbanna-input"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="elbanna-input-wrapper">
            <label htmlFor="subject" className="elbanna-label">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="elbanna-input"
              placeholder="Project inquiry"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="elbanna-input-wrapper">
            <label htmlFor="message" className="elbanna-label">Message</label>
            <textarea
              id="message"
              name="message"
              className="elbanna-textarea"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="elbanna-send-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;