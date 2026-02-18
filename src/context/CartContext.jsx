import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('nibbo-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('nibbo-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const clearCart = () => setCartItems([]);

    const cartTotal = cartItems.reduce((total, item) => {
        const price = parseInt(item.price.replace(/[^\d]/g, ''));
        return total + (price * item.quantity);
    }, 0);

    const whatsappCheckout = () => {
        const message = encodeURIComponent(
            `*New Order from Níbbo Market*\n\n` +
            cartItems.map(item => `• ${item.name} (${item.quantity}x) - ${item.price}`).join('\n') +
            `\n\n*Total: ₦${cartTotal.toLocaleString()}*\n\n_Please confirm availability for delivery to my location._`
        );
        window.open(`https://wa.me/2347068284564?text=${message}`, '_blank');
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            isCartOpen,
            setIsCartOpen,
            whatsappCheckout
        }}>
            {children}
        </CartContext.Provider>
    );
};
