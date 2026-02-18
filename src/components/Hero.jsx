import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="blob blob-1 animate-blob"></div>
                <div className="blob blob-2 animate-blob animation-delay-2000"></div>
                <div className="blob blob-3 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge fade-in-up">
                        <span className="badge-dot"></span>
                        <span className="badge-text">WhatsApp-Powered Logistics</span>
                    </div>

                    <h1 className="hero-title fade-in-up stagger-1">
                        Send, Shop & Move <br />
                        <span className="text-highlight">Via WhatsApp.</span>
                    </h1>

                    <p className="hero-description fade-in-up stagger-2">
                        Níbbo brings high-end logistics to your favorite chat app. No complex apps needed—just send a message to our automated assistant and get things done in minutes.
                    </p>

                    <div className="hero-actions fade-in-up stagger-3">
                        <a href="https://wa.me/YOUR_NUMBER" className="btn btn-whatsapp btn-lg shine">
                            <span className="btn-icon">💬</span>
                            Start on WhatsApp
                        </a>
                        <a href="#services" className="btn btn-outline btn-lg">
                            Explore Services
                        </a>
                    </div>

                    <div className="hero-features fade-in-up stagger-4">
                        <div className="hero-feature-item">
                            <span className="h-feat-icon">⚡</span>
                            <span>Instant Booking</span>
                        </div>
                        <div className="hero-feature-item">
                            <span className="h-feat-icon">📍</span>
                            <span>Live Tracking</span>
                        </div>
                        <div className="hero-feature-item">
                            <span className="h-feat-icon">💳</span>
                            <span>Secure Payments</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual-wrapper fade-in-up stagger-2">
                    <div className="whatsapp-mockup">
                        <div className="whatsapp-header">
                            <div className="wa-user-info">
                                <div className="wa-avatar">N</div>
                                <div className="wa-status">
                                    <strong>Níbbo Assistant</strong>
                                    <span>Online</span>
                                </div>
                            </div>
                            <div className="wa-icons">
                                <span>📞</span>
                                <span>⋮</span>
                            </div>
                        </div>
                        <div className="whatsapp-body">
                            <div className="wa-message sent">
                                <p>I need someone to pick up a package from Mowas and deliver to Panseke. 📦</p>
                                <span className="wa-time">09:41 AM ✓✓</span>
                            </div>
                            <div className="wa-message received">
                                <p>Sure! I've calculated the distance. A rider will be there in 8 minutes. Total cost is ₦1,200.</p>
                                <span className="wa-time">09:41 AM</span>
                            </div>
                            <div className="wa-message received action">
                                <p>Click below to confirm your rider. 👇</p>
                                <button className="wa-btn">Confirm Delivery</button>
                                <span className="wa-time">09:42 AM</span>
                            </div>
                            <div className="wa-message sent">
                                <p>Confirmed! Thanks Níbbo. ⚡</p>
                                <span className="wa-time">09:42 AM ✓✓</span>
                            </div>
                        </div>
                        <div className="whatsapp-footer">
                            <div className="wa-input-pill">
                                <span>😊</span>
                                <span className="wa-placeholder">Type a message...</span>
                                <span>📎</span>
                            </div>
                            <div className="wa-mic-btn">🎙️</div>
                        </div>
                    </div>

                    {/* Floating stats card */}
                    <div className="hero-float-card glass-card fade-in-up stagger-4">
                        <div className="f-card-icon">🚀</div>
                        <div className="f-card-content">
                            <strong>150+ Deliveries</strong>
                            <span>completed today</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero