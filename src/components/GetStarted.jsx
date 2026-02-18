import { useState, useEffect, useRef } from 'react'
import './GetStarted.css'

function GetStarted() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'customer'
    })

    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Signup:', formData)
        alert('🎉 Welcome to Níbbo! Your account has been created. Check your email for next steps.')
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
        <section id="get-started" className="get-started" ref={sectionRef}>
            <div className="container">
                <div className="get-started-box">
                    <div className="get-started-info">
                        <span className="info-badge">Join the Fleet</span>
                        <h2 className="info-title">Move with <br /><span>Níbbo.</span></h2>
                        <p className="info-text">
                            Abeokuta's most efficient logistics network is waiting for you. Whether you're sending or earning, we've got you covered.
                        </p>

                        <div className="info-perks">
                            <div className="perk">
                                <span className="perk-icon">⚡</span>
                                <div className="perk-text">
                                    <strong>High Speed</strong>
                                    <span>Deliveries in under 30 mins</span>
                                </div>
                            </div>
                            <div className="perk">
                                <span className="perk-icon">🔒</span>
                                <div className="perk-text">
                                    <strong>Fully Secure</strong>
                                    <span>Insured & Verified service</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="get-started-form-container">
                        <form className="get-started-form" onSubmit={handleSubmit}>
                            <h3 className="form-heading">Create Account</h3>

                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="role">Select your role</label>
                                <div className="select-wrapper">
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="form-select"
                                        required
                                    >
                                        <option value="customer">I am a Customer</option>
                                        <option value="rider">I am a Rider</option>
                                        <option value="vendor">I am a Vendor</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">
                                Join Níbbo Now
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>

                            <p className="form-footer">
                                By signing up, you agree to our <a href="#">Terms</a>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetStarted
