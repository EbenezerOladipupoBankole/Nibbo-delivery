import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Header.css'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const { cartItems, setIsCartOpen } = useCart()
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e, id) => {
        if (location.pathname !== '/') {
            // Navigate home first if not on home page
            return // Let standard Link behavior handle navigation
        }

        e.preventDefault()
        const element = document.querySelector(id)
        if (element) {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    NÍBBO
                    <svg className="logo-pin" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="var(--primary)" />
                    </svg>
                </Link>
                <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <ul className="nav-list">
                        <li><Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                        <li>
                            <a
                                href="/#services"
                                className="nav-link"
                                onClick={(e) => scrollToSection(e, '#services')}
                            >
                                Services
                            </a>
                        </li>
                        <li><Link to="/marketplace" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Market</Link></li>
                        <li>
                            <a
                                href="/get-involved"
                                className="nav-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Get Involved
                            </a>
                        </li>
                        <li>
                            <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/#get-started"
                                className="nav-link btn-primary"
                                onClick={(e) => scrollToSection(e, '#get-started')}
                            >
                                Get Started
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <button className="cart-toggle-btn" onClick={() => setIsCartOpen(true)}>
                        <span className="cart-icon">🧺</span>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>

                    <button
                        className="mobile-menu-btn"
                        aria-label="Toggle menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
