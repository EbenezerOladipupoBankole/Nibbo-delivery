import { useEffect, useRef } from 'react'
import './Testimonials.css'

const testimonials = [
    {
        rating: 5,
        quote: "Níbbo is a lifesaver! I sent a package from Kuto to Panseke in less than 20 minutes. No other service in Abeokuta hits this speed.",
        author: "Abiodun Okiki",
        role: "Small Business Owner",
        avatar: "AO"
    },
    {
        rating: 5,
        quote: "The WhatsApp automation is pure magic. I just text my delivery list, and a rider shows up. It's like having a personal assistant.",
        author: "Toluwani Ade",
        role: "FUNAAB Student",
        avatar: "TA"
    },
    {
        rating: 5,
        quote: "Reliable and professional. We use Níbbo for all our catering deliveries. Our customers love the real-time tracking updates.",
        author: "Chef Funmilayo",
        role: "CEO, Funmi's Kitchen",
        avatar: "FK"
    }
]

function Testimonials() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.testimonial-card')
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible')
                            }, index * 200)
                        })
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

    return (
        <section id="testimonials" className="testimonials" ref={sectionRef}>
            <div className="container">
                <div className="section-header text-center fade-in-up">
                    <span className="section-subtitle">Testimonials</span>
                    <h2 className="section-title">Loved by Abeokuta</h2>
                    <p className="section-description">
                        Join thousands of satisfied individuals and businesses who have switched to a smarter way of moving things.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card glass-card">
                            <div className="testimonial-stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                ))}
                            </div>
                            <p className="testimonial-quote">"{testimonial.quote}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.author}</h4>
                                    <span className="author-role">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
