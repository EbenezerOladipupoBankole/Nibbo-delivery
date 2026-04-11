import React from 'react';
import './HowItWorks.css';

const steps = [
    {
        number: "01",
        title: "Send your request via WhatsApp",
        description: "Message us with the details of your errand or delivery task."
    },
    {
        number: "02",
        title: "We confirm details and pricing",
        description: "Our team will quickly review and provide you with a transparent quote."
    },
    {
        number: "03",
        title: "A rider is assigned",
        description: "Once confirmed, we dispatch a trusted rider to handle your request."
    },
    {
        number: "04",
        title: "Task is completed",
        description: "The rider executes the errand or picks up the item as requested."
    },
    {
        number: "05",
        title: "Item delivered to you",
        description: "Your item is delivered safely to your doorstep. Simple as that!"
    }
];

const HowItWorks = () => {
    return (
        <div className="how-it-works-page">
            <header className="page-header">
                <div className="container">
                    <h1>How It Works</h1>
                    <p>Simple. Reliable. Efficient. Get your errands done in 5 easy steps.</p>
                </div>
            </header>

            <section className="steps-section container">
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta-banner container">
                <h2>Ready to start?</h2>
                <p>Níbbo makes life easier. Let us handle the running around for you.</p>
                <a href="https://wa.me/2348123456789" className="btn-primary">Get Started Now</a>
            </section>
        </div>
    );
};

export default HowItWorks;
