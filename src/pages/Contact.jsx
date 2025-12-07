import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
    };

    return (
        <div className="contact-page">
            <section className="page-header contact-header">
                <div className="container">
                    <h1 className="animate-slide-up">Get In Touch</h1>
                    <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Ready to build your next hospitality project?
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info glass-panel animate-slide-up">
                            <h2>Contact Information</h2>
                            <p className="mb-4">Send us your project details — we’ll bring it to life.</p>

                            <div className="info-item">
                                <div className="icon-box"><MapPin /></div>
                                <div>
                                    <h3>Our Office</h3>
                                    <p>123 Hospitality Lane, Business District</p>
                                    <p>City, Country, 12345</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><Phone /></div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+1 234 567 8900</p>
                                    <p>Mon-Fri, 9am - 6pm</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box"><Mail /></div>
                                <div>
                                    <h3>Email</h3>
                                    <p>hello@hungryduck.com</p>
                                    <p>support@hungryduck.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container glass-panel animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <h2>Send a Message</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" placeholder="john@example.com" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <select id="subject">
                                        <option>General Inquiry</option>
                                        <option>Turnkey Project</option>
                                        <option>Hotel Development</option>
                                        <option>Restaurant Setup</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows="5" placeholder="Tell us about your project..." required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Send Message <Send size={18} style={{ marginLeft: '10px' }} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
