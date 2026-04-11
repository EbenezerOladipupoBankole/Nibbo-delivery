import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <header className="page-header">
                <div className="container">
                    <h1>Get In Touch</h1>
                    <p>Have a question or need an errand handled? We are just a message away.</p>
                </div>
            </header>

            <section className="contact-content container">
                <div className="contact-card">
                    <div className="contact-item">
                        <span className="icon">📱</span>
                        <div className="details">
                            <h3>WhatsApp</h3>
                            <p>+234 812 345 6789</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="icon">📍</span>
                        <div className="details">
                            <h3>Location</h3>
                            <p>Abeokuta, Ogun State</p>
                        </div>
                    </div>
                    
                    <div className="fastest-reach">
                        <p>Fastest way to reach us:</p>
                        <a href="https://wa.me/2348123456789" className="btn-primary large">👉 Click the WhatsApp button below</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

