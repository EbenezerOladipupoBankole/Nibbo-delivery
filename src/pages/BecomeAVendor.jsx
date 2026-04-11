import React, { useState } from 'react';
import './FormPages.css';

const BecomeAVendor = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        ownerName: '',
        phone: '',
        productType: '',
        location: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Hi Níbbo! I'd like to partner as a Vendor.\n\nBusiness: ${formData.businessName}\nOwner: ${formData.ownerName}\nPhone: ${formData.phone}\nProducts: ${formData.productType}\nLocation: ${formData.location}`;
        const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="form-page">
            <header className="page-header">
                <div className="container">
                    <h1>Partner With Níbbo</h1>
                    <p>We connect vendors with customers looking for convenience.</p>
                </div>
            </header>

            <div className="container form-content">
                <section className="info-section">
                    <h2>Benefits</h2>
                    <ul>
                        <li>Increased visibility</li>
                        <li>More customers</li>
                        <li>Easy order fulfillment</li>
                    </ul>

                    <div className="status-box">
                        <h3>Current Status</h3>
                        <p>Marketplace launching soon. We are onboarding early vendors.</p>
                    </div>
                </section>

                <section className="form-section">
                    <h2>Apply to Join</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="businessName">Business Name</label>
                            <input type="text" id="businessName" name="businessName" required value={formData.businessName} onChange={handleChange} placeholder="Elegant Fashions" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ownerName">Owner Name</label>
                            <input type="text" id="ownerName" name="ownerName" required value={formData.ownerName} onChange={handleChange} placeholder="Jane Doe" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="08012345678" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productType">Type of Products</label>
                            <input type="text" id="productType" name="productType" required value={formData.productType} onChange={handleChange} placeholder="e.g. Clothing, Food, Gadgets" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input type="text" id="location" name="location" required value={formData.location} onChange={handleChange} placeholder="e.g. Kuto Market, Abeokuta" />
                        </div>
                        <button type="submit" className="btn-primary full-width">Apply via WhatsApp</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default BecomeAVendor;
