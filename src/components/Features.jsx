import React from 'react'
import './Features.css'

const featuresList = [
    {
        icon: '💬',
        title: 'WhatsApp Native Experience',
        description: 'We chose the platform you already use every day. No new apps to learn, no heavy data usage, just pure logistics in your chat window.',
        details: [
            'Zero app storage required',
            'Instant responses via AI Assistant',
            'Share locations & photos directly'
        ]
    },
    {
        icon: '🔒',
        title: 'Ironclad Security & Trust',
        description: 'Logistics is about peace of mind. Every Níbbo transaction is backed by our multi-layer security protocol for your items.',
        details: [
            '100% Verified professional riders',
            'Digital delivery receipts',
            'Insured items for every trip'
        ]
    },
    {
        icon: '💳',
        title: 'Frictionless Payments',
        description: 'Forget awkward cash handling. Pay safely using our integrated payment system designed for the Nigerian market.',
        details: [
            'Secure Paystack-powered links',
            'Instant bank transfer verification',
            'Transparent, flat-rate pricing'
        ]
    },
    {
        icon: '🗺️',
        title: 'Local Abeokuta Expertise',
        description: 'Unlike generic apps, we know the streets of Abeokuta. From Kuto to Panseke, our riders navigate with local precision.',
        details: [
            'Bypass heavy traffic zones',
            'Intra-campus (FUNAAB/MAPOLY) specialty',
            'Direct market-to-door connections'
        ]
    }
]

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header text-center fade-in-up">
                    <span className="section-subtitle">Why We Are Different</span>
                    <h2 className="section-title">The Future of Errands</h2>
                    <p className="section-description">
                        Níbbo isn't just a delivery company; it's an infrastructure built to solve the unique challenges of logistics in Abeokuta.
                    </p>
                </div>

                <div className="features-grid">
                    {featuresList.map((feature, index) => (
                        <div className={`feature-card glass-card fade-in-up stagger-${index + 1}`} key={index}>
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon">{feature.icon}</div>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>

                            <div className="feature-detail-box">
                                {feature.details.map((detail, idx) => (
                                    <div key={idx} className="feature-detail-item">
                                        <span className="detail-bullet"></span>
                                        <span>{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features