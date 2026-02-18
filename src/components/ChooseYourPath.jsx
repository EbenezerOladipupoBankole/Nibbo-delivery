import { useEffect, useRef } from 'react'
import './ChooseYourPath.css'

const paths = [
    {
        id: 'customer',
        title: 'Customer',
        icon: '🛍️',
        description: 'Send items, order food, or get errands done without leaving WhatsApp. Pay via transfer or link and track your rider in real-time.',
        perks: ['No App Download', 'Instant Chat Updates', 'Secure Transfers']
    },
    {
        id: 'rider',
        title: 'Rider',
        icon: '🛵',
        description: 'Join the Níbbo fleet as a logistics professional. Get job alerts on WhatsApp, earn per delivery, and be your own boss.',
        perks: ['Weekly Payouts', 'Flexible Hours', 'Verified Assignments']
    },
    {
        id: 'vendor',
        title: 'Vendor',
        icon: '🏪',
        description: 'Scale your business logistics. We integrate with your existing sales channel to provide reliable delivery for your customers.',
        perks: ['Bulk Discounts', 'Sales Dashboard', 'Dedicated Support']
    }
]

function ChooseYourPath() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.path-card')
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('visible')
                            }, index * 200)
                        })
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section id="choose-path" className="choose-path" ref={sectionRef}>
            <div className="container">
                <div className="text-center fade-in-up">
                    <span className="section-subtitle">Opportunities</span>
                    <h2 className="section-title">One Platform, Three Paths</h2>
                    <p className="section-description">
                        Select your role and start experience the most automated logistics ecosystem in Abeokuta.
                    </p>
                </div>

                <div className="paths-grid">
                    {paths.map((path) => (
                        <div key={path.id} className="path-card glass-card">
                            <div className="path-icon-wrapper">
                                <span className="path-icon">{path.icon}</span>
                            </div>
                            <div className="path-content">
                                <h3 className="path-title">{path.title}</h3>
                                <p className="path-desc">{path.description}</p>

                                <div className="path-perks">
                                    {path.perks.map((perk, idx) => (
                                        <span key={idx} className="perk-tag">{perk}</span>
                                    ))}
                                </div>

                                <button className="path-cta">
                                    Get Started As {path.title}
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ChooseYourPath
