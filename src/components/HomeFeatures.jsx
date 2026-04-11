import React from 'react';
import './HomeFeatures.css';

const HomeFeatures = () => {
    return (
        <section className="home-features">
            <div className="container">
                <div className="features-grid">
                    <div className="feature-group">
                        <h2 className="group-title">What We Do</h2>
                        <p className="group-intro">Níbbo is your trusted partner for everyday convenience. We handle:</p>
                        <div className="feature-cards">
                            <div className="f-card">
                                <span className="f-icon">🛒</span>
                                <h3>Market runs & shopping</h3>
                            </div>
                            <div className="f-card">
                                <span className="f-icon">📦</span>
                                <h3>Pickup & delivery</h3>
                            </div>
                            <div className="f-card">
                                <span className="f-icon">🧾</span>
                                <h3>Simple errands</h3>
                            </div>
                        </div>
                        <p className="group-outro">So you can focus on what matters.</p>
                    </div>

                    <div className="feature-group">
                        <h2 className="group-title">Why Choose Níbbo</h2>
                        <div className="check-list">
                            <div className="check-item">
                                <span className="check-icon">✅</span>
                                <div className="check-text">
                                    <h3>Fast response time</h3>
                                </div>
                            </div>
                            <div className="check-item">
                                <span className="check-icon">✅</span>
                                <div className="check-text">
                                    <h3>Trusted riders</h3>
                                </div>
                            </div>
                            <div className="check-item">
                                <span className="check-icon">✅</span>
                                <div className="check-text">
                                    <h3>Transparent pricing</h3>
                                </div>
                            </div>
                            <div className="check-item">
                                <span className="check-icon">✅</span>
                                <div className="check-text">
                                    <h3>Stress-free experience</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFeatures;
