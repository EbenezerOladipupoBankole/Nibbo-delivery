import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'

const Services = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible')
              }, index * 150)
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

  const services = [
    {
      title: 'Food & Groceries',
      description: 'Order from any restaurant or market in Abeokuta. We handle the shopping and the delivery. No minimum order.',
      details: ['Market (Lafenwa/Kuto) Runs', 'Restaurant Deliveries', 'Specific Grocery Lists'],
      icon: '🍎',
      color: 'var(--primary)',
      tag: 'Daily Needs',
      link: '/marketplace',
      linkText: 'Browse the Market',
      isInternal: true
    },
    {
      title: 'Express Errands',
      description: 'Need documents delivered, bills paid, or items picked up from a relative? Our riders are your personal assistants.',
      details: ['Document Dispatch', 'Bill Payments', 'Gift Deliveries'],
      icon: '⚡',
      color: '#25D366',
      tag: 'On-Demand',
      link: 'https://wa.me/YOUR_NUMBER',
      linkText: 'Book on WhatsApp',
      isInternal: false
    },
    {
      title: 'Corporate Logistics',
      description: 'Scale your business with our dedicated fleet. We handle bulk distributions and inventory movement.',
      details: ['Inventory Movement', 'Bulk Order Fulfillment', 'Weekly Logistics Plans'],
      icon: '💼',
      color: 'var(--logo-green)',
      tag: 'For Business',
      link: 'https://wa.me/YOUR_NUMBER',
      linkText: 'Book on WhatsApp',
      isInternal: false
    }
  ]

  return (
    <section id="services" className="services" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center fade-in-up">
          <span className="section-subtitle">Comprehensive Solutions</span>
          <h2 className="section-title">Beyond Just Delivery</h2>
          <p className="section-description">
            We've optimized our services for the WhatsApp era. Detailed, reliable, and always just one text away.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-card">
              <div className="service-tag" style={{ backgroundColor: service.color }}>{service.tag}</div>
              <div className="service-icon-main" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <ul className="service-details-list">
                {service.details.map((detail, idx) => (
                  <li key={idx}><span className="check">✓</span> {detail}</li>
                ))}
              </ul>

              {service.isInternal ? (
                <Link to={service.link} className="service-link" style={{ color: service.color }}>
                  {service.linkText} <span>→</span>
                </Link>
              ) : (
                <a href={service.link} className="service-link" style={{ color: service.color }}>
                  {service.linkText} <span>→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
