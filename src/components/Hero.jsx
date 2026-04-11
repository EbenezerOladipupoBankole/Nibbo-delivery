import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background-image">
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge fade-in-up">
                        <span className="badge-dot"></span>
                        <span className="badge-text">Trusted by customers in Abeokuta</span>
                    </div>

                    <h1 className="hero-title fade-in-up stagger-1">
                        Fast Errands & <br />
                        <span className="text-highlight">Reliable Delivery.</span>
                    </h1>

                    <p className="hero-description fade-in-up stagger-2">
                        We help you run errands, shop for you, and deliver items quickly and safely — all through a simple WhatsApp process.
                    </p>

                    <div className="hero-actions fade-in-up stagger-3">
                        <a href="https://wa.me/2348123456789" className="btn btn-whatsapp btn-lg shine">
                            <span className="btn-icon">📱</span>
                            Chat on WhatsApp
                        </a>
                        <a href="/services" className="btn btn-outline btn-lg">
                            🚀 Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero