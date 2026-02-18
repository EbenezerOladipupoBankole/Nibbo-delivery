import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import Marketplace from './pages/Marketplace'
import CartDrawer from './components/CartDrawer'
import { CartProvider } from './context/CartContext'
import './App.css'

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="app-wrapper">
                    <Header />
                    <CartDrawer />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/get-involved" element={<GetInvolved />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/marketplace" element={<Marketplace />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    )
}

export default App
