import React from 'react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        updateQuantity,
        removeFromCart,
        cartTotal,
        whatsappCheckout
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
            <div className="cart-drawer" onClick={e => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Your Basket</h2>
                    <button className="close-cart" onClick={() => setIsCartOpen(false)}>✕</button>
                </div>

                <div className="cart-content">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <span className="empty-icon">🧺</span>
                            <p>Your basket is empty. Start adding local market items!</p>
                        </div>
                    ) : (
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-img">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <p className="item-vendor">{item.vendor}</p>
                                        <div className="item-controls">
                                            <div className="qty-btns">
                                                <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            </div>
                                            <span className="item-price">{item.price}</span>
                                        </div>
                                    </div>
                                    <button className="remove-item" onClick={() => removeFromCart(item.id)}>✕</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="total-row">
                            <span>Total</span>
                            <span>₦{cartTotal.toLocaleString()}</span>
                        </div>
                        <button className="whatsapp-checkout-btn" onClick={whatsappCheckout}>
                            Checkout on WhatsApp 🚀
                        </button>
                        <p className="checkout-note">Detailed list will be sent to Níbbo Logistics</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
