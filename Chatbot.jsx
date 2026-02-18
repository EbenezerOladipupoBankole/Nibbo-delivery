import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [step, setStep] = useState('START');
    const [orderDetails, setOrderDetails] = useState({});
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Pricing Constants
    const BASE_FEE = 5;
    const PRICE_PER_KM = 1.5;
    const EXPRESS_FEE = 5;
    const LARGE_PARCEL_FEE = 3;

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Initial greeting
            addBotMessage("Welcome to Níbbo! 🏍️ How can I help you today?", [
                "Book Delivery",
                "Price Estimate",
                "Track Order",
                "Support"
            ]);
            setStep('MAIN_MENU');
        }
    }, [isOpen]);

    const addBotMessage = (text, options = []) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, { text, sender: 'bot', options }]);
            setIsTyping(false);
        }, 600);
    };

    const addUserMessage = (text) => {
        setMessages(prev => [...prev, { text, sender: 'user' }]);
        processInput(text);
    };

    const calculatePrice = (dist, type, speed) => {
        // Mock distance calculation since we don't have a map API
        // Random distance between 2km and 15km for demo purposes if not provided
        const distance = dist || Math.floor(Math.random() * 13) + 2;

        let price = BASE_FEE + (distance * PRICE_PER_KM);
        if (speed === 'Express') price += EXPRESS_FEE;
        if (type === 'Large Parcel') price += LARGE_PARCEL_FEE;

        return price.toFixed(2);
    };

    const processInput = (input) => {
        const lowerInput = input.toLowerCase();

        // Global Support Handler
        if (lowerInput.includes('human') || lowerInput.includes('support') || lowerInput.includes('agent')) {
            addBotMessage("I will connect you with a support agent shortly.");
            setStep('ENDED');
            return;
        }

        switch (step) {
            case 'MAIN_MENU':
                if (lowerInput.includes('book')) {
                    setStep('COLLECT_PICKUP');
                    addBotMessage("Great! Let's book your delivery. What is the pickup address?");
                } else if (lowerInput.includes('estimate') || lowerInput.includes('price')) {
                    setStep('ESTIMATE_PICKUP');
                    addBotMessage("I can help with that. What is the pickup address?");
                } else if (lowerInput.includes('track')) {
                    setStep('TRACK_ORDER');
                    addBotMessage("To track your order, please provide your tracking number.");
                } else {
                    addBotMessage("I'm not sure I understand. Please choose an option:", [
                        "Book Delivery", "Price Estimate", "Track Order", "Support"
                    ]);
                }
                break;

            // --- Booking Flow ---
            case 'COLLECT_PICKUP':
                setOrderDetails({ ...orderDetails, pickup: input });
                setStep('COLLECT_DROPOFF');
                addBotMessage("Got it. And where is it going? Please provide the drop-off address.");
                break;

            case 'COLLECT_DROPOFF':
                setOrderDetails({ ...orderDetails, dropoff: input });
                setStep('COLLECT_TYPE');
                addBotMessage("What type of package is it?", ["Document", "Small Parcel", "Large Parcel", "Food"]);
                break;

            case 'COLLECT_TYPE':
                setOrderDetails({ ...orderDetails, type: input });
                setStep('COLLECT_WEIGHT');
                addBotMessage("Okay. What's the estimated weight in kg?");
                break;

            case 'COLLECT_WEIGHT':
                setOrderDetails({ ...orderDetails, weight: input });
                setStep('COLLECT_SPEED');
                addBotMessage("Would you like Standard or Express delivery?", ["Standard", "Express"]);
                break;

            case 'COLLECT_SPEED':
                setOrderDetails({ ...orderDetails, speed: input });
                setStep('COLLECT_SENDER_NAME');
                addBotMessage("Perfect. What is the sender's full name?");
                break;

            case 'COLLECT_SENDER_NAME':
                setOrderDetails({ ...orderDetails, senderName: input });
                setStep('COLLECT_SENDER_PHONE');
                addBotMessage("And the sender's phone number?");
                break;

            case 'COLLECT_SENDER_PHONE':
                setOrderDetails({ ...orderDetails, senderPhone: input });
                setStep('COLLECT_RECEIVER_NAME');
                addBotMessage("Now for the recipient. What is their full name?");
                break;

            case 'COLLECT_RECEIVER_NAME':
                setOrderDetails({ ...orderDetails, receiverName: input });
                setStep('COLLECT_RECEIVER_PHONE');
                addBotMessage("And the recipient's phone number?");
                break;

            case 'COLLECT_RECEIVER_PHONE':
                setOrderDetails({ ...orderDetails, receiverPhone: input });
                setStep('COLLECT_TIME');
                addBotMessage("Last step! When should we pick it up? (e.g., 'Today at 3 PM' or 'ASAP')");
                break;

            case 'COLLECT_TIME':
                const finalDetails = { ...orderDetails, time: input };
                setOrderDetails(finalDetails);
                const price = calculatePrice(null, finalDetails.type, finalDetails.speed);
                setOrderDetails({ ...finalDetails, price });

                setStep('CONFIRM_ORDER');
                addBotMessage(
                    `Awesome! Here is your order summary:
          \n📍 Pickup: ${finalDetails.pickup}
          \n🏁 Drop-off: ${finalDetails.dropoff}
          \n📦 Package: ${finalDetails.type}, ${finalDetails.weight}
          \n🚀 Delivery: ${finalDetails.speed}
          \n💰 Total Price: $${price}
          \n\nDoes everything look correct?`,
                    ["Yes", "No"]
                );
                break;

            case 'CONFIRM_ORDER':
                if (lowerInput === 'yes') {
                    addBotMessage("Your order is confirmed! 🎉 You will receive updates via SMS. Thank you for choosing Níbbo!");
                    setStep('ENDED');
                } else {
                    addBotMessage("No problem. Let's start over. What is the pickup address?");
                    setStep('COLLECT_PICKUP');
                    setOrderDetails({});
                }
                break;

            // --- Estimate Flow ---
            case 'ESTIMATE_PICKUP':
                setOrderDetails({ ...orderDetails, pickup: input });
                setStep('ESTIMATE_DROPOFF');
                addBotMessage("And the drop-off address?");
                break;

            case 'ESTIMATE_DROPOFF':
                setOrderDetails({ ...orderDetails, dropoff: input });
                setStep('ESTIMATE_TYPE');
                addBotMessage("What type of package is it?", ["Document", "Small Parcel", "Large Parcel", "Food"]);
                break;

            case 'ESTIMATE_TYPE':
                setOrderDetails({ ...orderDetails, type: input });
                setStep('ESTIMATE_SPEED');
                addBotMessage("Standard or Express delivery?", ["Standard", "Express"]);
                break;

            case 'ESTIMATE_SPEED':
                const estPrice = calculatePrice(null, orderDetails.type, input);
                addBotMessage(`The estimated price for your delivery is **$${estPrice}**. \n\nWould you like to book this delivery?`, ["Yes", "No"]);
                setStep('ESTIMATE_DECISION');
                setOrderDetails({ ...orderDetails, speed: input, price: estPrice });
                break;

            case 'ESTIMATE_DECISION':
                if (lowerInput === 'yes') {
                    setStep('COLLECT_SENDER_NAME'); // Jump into booking flow
                    addBotMessage("Great! Let's get the details. What is the sender's full name?");
                } else {
                    addBotMessage("Okay! Let me know if you need anything else.");
                    setStep('MAIN_MENU');
                }
                break;

            case 'TRACK_ORDER':
                addBotMessage(`Checking status for ${input}... \n\n📦 Your package is currently **In Transit**. Estimated arrival: 20 mins.`);
                setStep('MAIN_MENU');
                break;

            case 'ENDED':
                addBotMessage("Is there anything else I can help you with?", ["Book Delivery", "Price Estimate", "Track Order"]);
                setStep('MAIN_MENU');
                break;

            default:
                addBotMessage("I'm a bit lost. Let's go back to the main menu.", ["Book Delivery", "Price Estimate", "Track Order"]);
                setStep('MAIN_MENU');
        }
    };

    return (
        <div className="chatbot-container">
            {!isOpen && (
                <button className="chatbot-toggle" onClick={toggleChat}>
                    💬
                </button>
            )}

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>Níbbo Assistant</h3>
                        <button onClick={toggleChat}>✕</button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.sender}`}>
                                <div className="message-text" style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
                                {msg.options && (
                                    <div className="message-options">
                                        {msg.options.map((opt, i) => (
                                            <button key={i} onClick={() => addUserMessage(opt)}>
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        {isTyping && <div className="message bot typing">...</div>}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-input">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' && e.target.value.trim()) {
                                    addUserMessage(e.target.value);
                                    e.target.value = '';
                                }
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;