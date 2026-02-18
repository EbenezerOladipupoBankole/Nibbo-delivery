import { useState } from 'react'
import './Waitlist.css'

function Waitlist() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'customer'
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Waitlist signup:', formData)
        alert('🎉 Welcome to Níbbo! You\'ve been added to our waitlist. We\'ll notify you when we launch in Abeokuta!')
        setFormData({
            name: '',
            email: '',
            phone: '',
            role: 'customer'
        })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="waitlist" className="waitlist">
            <div className="container">
                <div className="waitlist-content">
                    <div className="waitlist-header text-center">
                        <h2 className="section-title">Join the Waitlist</h2>
                        <p className="section-description">
                            Be among the first to experience Níbbo when we launch in Abeokuta.
                            Get early access and exclusive launch offers!
                        </p>
                    </div>

                    <form className="waitlist-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
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
                        </div>

                        <div className="form-group">
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="form-select"
                                required
                            >
                                <option value="customer">I want to send packages (Customer)</option>
                                <option value="rider">I want to deliver packages (Rider)</option>
                                <option value="vendor">I want to sell products (Vendor)</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            Secure My Spot 🚀
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Waitlist
