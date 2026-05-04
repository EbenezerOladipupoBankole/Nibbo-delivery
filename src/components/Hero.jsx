import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="brand-blob-1"></div>
            <div className="brand-blob-2"></div>
            
            <div className="container hero-layout">
                <div className="hero-text fade-in-up">
                    <div className="hero-tagline">
                        <span className="line"></span>
                        <span className="text">Reliable Delivery for Abeokuta</span>
                    </div>

                    <h1 className="hero-headline">
                        Moving your <span className="highlight-green">items</span>, <br />
                        Saving your <span className="highlight-orange">time.</span>
                    </h1>

                    <p className="hero-subtext">
                        Níbbo isn't just a delivery service; we're your personal errand partners. We handle the traffic and the queues, so you don't have to.
                    </p>

                    <div className="hero-btns">
                        <a href="https://wa.me/2348123456789" className="btn-brand-orange animate-pulse">
                            Order on WhatsApp
                        </a>
                        <Link to="/join-us" className="btn-brand-green">
                            Join the Team
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="number">100%</span>
                            <span className="label">Safe Delivery</span>
                        </div>
                        <div className="stat">
                            <span className="number">15min</span>
                            <span className="label">Avg. Response</span>
                        </div>
                    </div>
                </div>

                <div className="hero-frame-container fade-in-up stagger-1">
                    <div className="main-image-frame">
                        <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1000" alt="Delivery Bike" className="frame-image" />
                        <div className="frame-border-1"></div>
                        <div className="frame-border-2"></div>
                    </div>
                    
                    <div className="floating-badge-orange">
                        <strong>Fast</strong>
                        <span>& Secure</span>
                    </div>
                    
                    <div className="floating-badge-green">
                        <strong>Trusted</strong>
                        <span>Local Service</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero