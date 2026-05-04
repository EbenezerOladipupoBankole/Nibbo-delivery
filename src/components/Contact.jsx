import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData)
            setIsSubmitting(false)
            setSubmitted(true)
            setFormData({ name: '', email: '', subject: '', message: '' })
            setTimeout(() => setSubmitted(false), 5000)
        }, 1500)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info-card fade-in-up">
                        <span className="section-subtitle">Contact Us</span>
                        <h2 className="section-title">Let's start a <br /><span className="text-highlight">conversation.</span></h2>
                        <p className="contact-description">
                            Have a question, feedback, or a specific errand in mind? Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <div className="method-icon">📍</div>
                                <div className="method-text">
                                    <h4>Our Office</h4>
                                    <p>Abeokuta, Ogun State, Nigeria</p>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon">📧</div>
                                <div className="method-text">
                                    <h4>Email Us</h4>
                                    <p>hello@nibbo.com</p>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon">💬</div>
                                <div className="method-text">
                                    <h4>WhatsApp</h4>
                                    <p>+234 812 345 6789</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-card glass-card fade-in-up stagger-1">
                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon">✅</div>
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. We'll get back to you soon.</p>
                                <button onClick={() => setSubmitted(false)} className="btn-primary">Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="premium-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="How can we help?"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Feedback / Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Tell us what's on your mind..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn-primary btn-block" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
