import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import './Marketplace.css'

const Marketplace = () => {
    const categories = ['All', 'Rice & Grains', 'Fresh Proteins', 'Oils & Spices', 'Tubers', 'Household']
    const [activeCategory, setActiveCategory] = useState('All')
    const { addToCart } = useCart()

    const products = [
        {
            id: 1,
            name: 'Local Ofada Rice (5kg)',
            price: '₦8,500',
            vendor: 'Mama Tobi Rice Store',
            market: 'Lafenwa Market',
            image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400',
            category: 'Rice & Grains',
            tag: 'Abeokuta Special'
        },
        {
            id: 2,
            name: 'Fresh Catfish (Large)',
            price: '₦4,200',
            vendor: 'Iya Ibeji Fish Depot',
            market: 'Kuto Market',
            image: 'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?auto=format&fit=crop&q=80&w=400',
            category: 'Fresh Proteins',
            tag: 'Fresh Catch'
        },
        {
            id: 3,
            name: 'Premium Palm Oil (5L)',
            price: '₦5,800',
            vendor: 'Baba Ganiyu Oils',
            market: 'Lafenwa Market',
            image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400',
            category: 'Oils & Spices',
            tag: 'Pure Grade'
        },
        {
            id: 4,
            name: 'Sweet Potatoes (Big Basket)',
            price: '₦3,500',
            vendor: 'Market Square Tubers',
            market: 'Kuto Market',
            image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400',
            category: 'Tubers',
            tag: 'Direct from Farm'
        },
        {
            id: 5,
            name: 'Smoked Turkey (Pre-packed)',
            price: '₦12,500',
            vendor: 'Elite Cold Room',
            market: 'Panseke',
            image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=400',
            category: 'Fresh Proteins',
            tag: 'Top Quality'
        },
        {
            id: 6,
            name: 'Golden Penny Sugar (Pack)',
            price: '₦1,200',
            vendor: 'Adebayo Provisions',
            market: 'Kuto Market',
            image: 'https://images.unsplash.com/photo-1581448670546-95ec45f2e600?auto=format&fit=crop&q=80&w=400',
            category: 'Household',
            tag: 'Pantry Essential'
        }
    ]

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory)

    return (
        <div className="marketplace-page">
            <header className="marketplace-header">
                <div className="container">
                    <div className="header-content">
                        <span className="badge">Níbbo Market</span>
                        <h1>Abeokuta Local Market Store</h1>
                        <p>Browse fresh produce and essentials directly from Lafenwa, Kuto, and Panseke markets. We shop, you relax.</p>
                    </div>
                </div>
            </header>

            <section className="marketplace-content">
                <div className="container">
                    <div className="search-filter-bar">
                        <div className="search-box">
                            <input type="text" placeholder="Search for food, groceries, or essentials..." />
                            <button className="search-btn">🔍</button>
                        </div>
                        <div className="categories-scroll">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="products-grid">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="product-card glass-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                    <span className="product-tag">{product.tag}</span>
                                </div>
                                <div className="product-info">
                                    <div className="vendor-meta">
                                        <span className="vendor-name">🏪 {product.vendor}</span>
                                        <span className="market-location">📍 {product.market}</span>
                                    </div>
                                    <h3 className="product-name">{product.name}</h3>
                                    <div className="product-footer">
                                        <span className="product-price">{product.price}</span>
                                        <button className="add-to-cart" onClick={() => addToCart(product)}>Add +</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="vendor-upsell glass-card">
                        <div className="upsell-text">
                            <h3>Are you a vendor in Abeokuta?</h3>
                            <p>Post your products here and reach thousands of customers across the city.</p>
                        </div>
                        <button className="join-vendor-btn">Register as Vendor</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Marketplace
