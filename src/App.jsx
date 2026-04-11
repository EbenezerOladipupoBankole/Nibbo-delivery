import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import HowItWorks from './pages/HowItWorks'
import BecomeARider from './pages/BecomeARider'
import BecomeAVendor from './pages/BecomeAVendor'
import Contact from './pages/Contact'
import Marketplace from './pages/Marketplace'
import WhatsAppButton from './components/WhatsAppButton'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="app-wrapper">
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/how-it-works" element={<HowItWorks />} />
                            <Route path="/become-a-rider" element={<BecomeARider />} />
                            <Route path="/become-a-vendor" element={<BecomeAVendor />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/marketplace" element={<Marketplace />} />
                        </Routes>
                    </main>
                    <Footer />
                    <WhatsAppButton />
                </div>
            </Router>
        </CartProvider>
    )
}

export default App

