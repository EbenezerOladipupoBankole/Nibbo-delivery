import React from 'react'
import './Gallery.css'

const Gallery = () => {
    const items = [
        { id: 1, type: 'image', label: 'Fast Delivery', emoji: '🛵', color: '#FF6600' },
        { id: 2, type: 'image', label: 'Happy Customers', emoji: '😊', color: '#1B3B2B' },
        { id: 3, type: 'image', label: 'Verified Riders', emoji: '🛡️', color: '#25D366' },
        { id: 4, type: 'image', label: 'Local Food', emoji: '🍲', color: '#FFB800' },
        { id: 5, type: 'image', label: 'Market Errands', emoji: '🛍️', color: '#10B981' },
        { id: 6, type: 'image', label: 'Secure Payouts', emoji: '💳', color: '#075E54' }
    ]

    return (
        <section className="gallery-section">
            <div className="container">
                <div className="section-header text-center fade-in-up">
                    <span className="section-subtitle">Visual Experience</span>
                    <h2 className="section-title">Níbbo in Action</h2>
                    <p className="section-description">
                        We are merging high-end logistics with the simplicity of WhatsApp. Here is how we are transforming movement across the streets of Abeokuta.
                    </p>
                </div>

                <div className="gallery-grid">
                    {items.map((item) => (
                        <div key={item.id} className="gallery-item fade-in-up"
                            style={{ backgroundColor: item.color + '15', borderColor: item.color + '30' }}>
                            <div className="gallery-visual">
                                <span className="gallery-emoji">{item.emoji}</span>
                                <div className="gallery-overlay">
                                    <span className="gallery-label">{item.label}</span>
                                    <p className="gallery-detail">Professional logistics handled with local precision.</p>
                                </div>
                            </div>
                            <div className="gallery-content">
                                <h3>{item.label}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
