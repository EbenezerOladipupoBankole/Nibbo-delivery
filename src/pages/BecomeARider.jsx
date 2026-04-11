import React, { useState } from 'react';
import './FormPages.css';

const BecomeARider = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        hasBike: 'No',
        experience: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Hi Níbbo! I'd like to join as a Rider.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nHas Bike: ${formData.hasBike}\nExperience: ${formData.experience}`;
        const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="form-page">
            <header className="page-header">
                <div className="container">
                    <h1>Join Níbbo as a Rider</h1>
                    <p>Earn money by helping people run errands and deliver items.</p>
                </div>
            </header>

            <div className="container form-content">
                <section className="info-section">
                    <h2>Requirements</h2>
                    <ul>
                        <li>Reliable and responsible</li>
                        <li>Good knowledge of Abeokuta</li>
                        <li>Access to a bike</li>
                        <li>Valid identification</li>
                    </ul>

                    <h2>How It Works</h2>
                    <ul className="numbered-list">
                        <li>Receive tasks via WhatsApp</li>
                        <li>Accept and complete jobs</li>
                        <li>Get paid per task</li>
                    </ul>
                </section>

                <section className="form-section">
                    <h2>Apply Now</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="08012345678" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location (Area in Abeokuta)</label>
                            <input type="text" id="location" name="location" required value={formData.location} onChange={handleChange} placeholder="e.g. Obantoko, Panseke" />
                        </div>
                        <div className="form-group">
                            <label>Do you have a bike?</label>
                            <div className="radio-group">
                                <label>
                                    <input type="radio" name="hasBike" value="Yes" checked={formData.hasBike === 'Yes'} onChange={handleChange} /> Yes
                                </label>
                                <label>
                                    <input type="radio" name="hasBike" value="No" checked={formData.hasBike === 'No'} onChange={handleChange} /> No
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="experience">Experience (optional)</label>
                            <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange} placeholder="Tell us about your delivery experience..."></textarea>
                        </div>
                        <button type="submit" className="btn-primary full-width">Apply via WhatsApp</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default BecomeARider;
