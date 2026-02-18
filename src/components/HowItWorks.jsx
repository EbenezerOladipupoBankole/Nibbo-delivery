import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Message US on WhatsApp',
            description: 'Send a "Hi" to our Níbbo WhatsApp number or click the "Start" button on our website.',
            icon: '💬'
        },
        {
            number: '02',
            title: 'Automated Booking',
            description: 'Our AI-powered assistant collects your pickup and drop-off details instantly.',
            icon: '🤖'
        },
        {
            number: '03',
            title: 'Swift Dispatch',
            description: 'A verified Níbbo rider is assigned to your order. You get their details and live tracking link.',
            icon: '🛵'
        },
        {
            number: '04',
            title: 'Safe Arrival',
            description: 'Receive your package or errand items. Rate our service directly on WhatsApp.',
            icon: '✨'
        }
    ]

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <div className="section-header text-center fade-in-up">
                    <span className="section-subtitle">The WhatsApp Flow</span>
                    <h2 className="section-title">How Níbbo Works</h2>
                    <p className="section-description">
                        We've removed the complexity. No apps to download, no accounts to verify—just high-speed logistics through your favorite chat app.
                    </p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="step-visual">
                                <div className="step-number-bg">{step.number}</div>
                                <div className="step-icon-wrapper">
                                    <span className="step-icon">{step.icon}</span>
                                </div>
                                {index < steps.length - 1 && <div className="step-connector"></div>}
                            </div>
                            <div className="step-content">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
