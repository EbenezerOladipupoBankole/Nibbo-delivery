import React from 'react';
import './HomeFeatures.css';

const HomeFeatures = () => {
    return (
        <section className="home-features-section">
            <div className="container">
                <div className="features-intro fade-in-up">
                    <h2 className="brand-title">We take care of the <span className="text-orange">logistics</span>, <br />while you focus on your <span className="text-green">life</span>.</h2>
                    <p className="brand-desc">Simple, human, and reliable errands in the heart of Abeokuta.</p>
                </div>

                <div className="brand-features-grid">
                    <div className="brand-feature fade-in-up stagger-1">
                        <div className="brand-icon-wrapper orange">🛒</div>
                        <h3>Market Runs</h3>
                        <p>We shop for you at the local markets and deliver fresh produce to your door.</p>
                    </div>
                    <div className="brand-feature fade-in-up stagger-2">
                        <div className="brand-icon-wrapper green">📦</div>
                        <h3>Swift Delivery</h3>
                        <p>Safe and tracked delivery for your packages and documents across the city.</p>
                    </div>
                    <div className="brand-feature fade-in-up stagger-3">
                        <div className="brand-icon-wrapper orange">🚲</div>
                        <h3>Personal Errands</h3>
                        <p>From bill payments to pick-ups, we are your hands on the ground.</p>
                    </div>
                </div>

                <div className="human-section glass-card fade-in-up">
                    <div className="human-content">
                        <h3>Built for Humans, by Humans.</h3>
                        <p>We started Níbbo because we saw how much time is wasted in traffic and long queues. Our mission is to give that time back to you, one errand at a time.</p>
                        <div className="human-stats">
                            <div className="h-stat">
                                <strong>50+</strong>
                                <span>Local Riders</span>
                            </div>
                            <div className="h-stat">
                                <strong>1000+</strong>
                                <span>Happy Neighbors</span>
                            </div>
                        </div>
                    </div>
                    <div className="human-frame">
                        <img src="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=1000" alt="Our Team" className="frame-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFeatures;
