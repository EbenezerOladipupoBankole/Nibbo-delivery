import React from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
    return (
        <div className="services-page">
            <header className="page-header">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Reliable logistics and errand services tailored for your convenience in Abeokuta.</p>
                </div>
            </header>

            <section className="services-grid-section container">
                <div className="service-item">
                    <div className="service-icon">🛒</div>
                    <h2>Errands</h2>
                    <p>We help you handle simple, everyday tasks quickly and efficiently.</p>
                    <ul>
                        <li>Market runs</li>
                        <li>Grocery shopping</li>
                        <li>Supermarket purchases</li>
                        <li>Personal shopping</li>
                    </ul>
                    <p className="note"><strong>Important:</strong> Tasks must be clear and easy to execute to ensure fast delivery and accuracy.</p>
                </div>

                <div className="service-item">
                    <div className="service-icon">📦</div>
                    <h2>Delivery (Within City)</h2>
                    <p>We move items from one location to another quickly and safely within Abeokuta.</p>
                    <ul>
                        <li>Pickup from store → Deliver to home</li>
                        <li>Send package across town</li>
                    </ul>
                    <p className="highlight">Reliable. Fast. Secure.</p>
                </div>

                <div className="service-item coming-soon">
                    <div className="service-icon">🛍️</div>
                    <h2>Marketplace</h2>
                    <span className="badge">Coming Soon</span>
                    <p>We are onboarding trusted vendors across Abeokuta. Soon, you’ll be able to:</p>
                    <ul>
                        <li>Buy directly from vendors</li>
                        <li>Access affordable products</li>
                        <li>Shop conveniently</li>
                    </ul>
                </div>

                <div className="service-item coming-soon">
                    <div className="service-icon">🚚</div>
                    <h2>Inter-State Delivery</h2>
                    <span className="badge">Coming Soon</span>
                    <p>Nationwide logistics and waybill services will be available soon to help you send items beyond Abeokuta.</p>
                </div>
            </section>

            <section className="cta-banner container">
                <h2>Need something done?</h2>
                <p>Chat with us on WhatsApp to get started right away.</p>
                <a href="https://wa.me/2348123456789" className="btn-primary">Chat on WhatsApp</a>
            </section>
        </div>
    );
};

export default ServicesPage;
