import React from 'react';
import './Services.css';

const serviceCategories = [
    {
        title: "Assembly",
        icon: "🛠️",
        items: ["Furniture Assembly", "IKEA Assembly", "Crib Assembly", "PAX Assembly", "Bookshelf Assembly"]
    },
    {
        title: "Mounting",
        icon: "🖼️",
        items: ["TV Mounting", "Picture Hanging", "Shelf Mounting", "Curtain Rod Installation", "Mirror Mounting"]
    },
    {
        title: "Moving",
        icon: "📦",
        items: ["Help Moving", "Truck Assisted Help Moving", "Packing & Unpacking", "Heavy Lifting", "Local Movers"]
    },
    {
        title: "Cleaning",
        icon: "🧹",
        items: ["House Cleaning", "Deep Cleaning", "Move In/Out Cleaning", "Office Cleaning", "Laundry Help"]
    },
    {
        title: "Outdoor Help",
        icon: "🌿",
        items: ["Yard Work", "Lawn Care", "Snow Removal", "Gutter Cleaning", "Gardening"]
    },
    {
        title: "Home Repairs",
        icon: "🔧",
        items: ["Electrical Help", "Plumbing Help", "Light Carpentry", "Painting", "Door Repair"]
    },
    {
        title: "Delivery",
        icon: "🚚",
        items: ["Contactless Delivery", "Grocery Delivery", "Food Delivery", "Errands", "Shipping"]
    },
    {
        title: "Office",
        icon: "🏢",
        items: ["Office Cleaning", "Office Moving", "Office Supply Run", "Organization", "Admin"]
    }
];

const Services = () => {
    return (
        <section className="services-section">
            <div className="services-container">
                <h2 className="services-title">Get help with...</h2>
                <div className="services-grid">
                    {serviceCategories.map((category, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{category.icon}</div>
                            <h3 className="service-category-title">{category.title}</h3>
                            <ul className="service-list">
                                {category.items.map((item, idx) => (
                                    <li key={idx}><a href="#">{item}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;