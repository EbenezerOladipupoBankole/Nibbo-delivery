import { useState } from 'react'
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pickupAddress: '',
        deliveryAddress: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you! We will contact you shortly to confirm your delivery.')
        setFormData({
            name: '',
            phone: '',
            pickupAddress: '',
            deliveryAddress: ''
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="contact">
            <div className="container contact-container">
                <div className="contact-info">
                    <span className="section-subtitle">Get in Touch</span>
                    <h2 className="section-title">Ready to Send?</h2>
                    <p className="contact-desc">
                        Contact us today to schedule your delivery or get a custom quote for your business.
                    </p>

                    <div className="contact-details">
                        <div className="detail-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span>(555) 123-4567</span>
                        </div>
                        <div className="detail-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span>orders@nibbodelivery.com</span>
                        </div>
                        <div className="detail-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>123 Courier Lane, Cityville</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3>Quick Order</h3>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="pickupAddress"
                                    placeholder="Pickup Address"
                                    value={formData.pickupAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="deliveryAddress"
                                    placeholder="Delivery Address"
                                    value={formData.deliveryAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            Schedule Pickup
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
