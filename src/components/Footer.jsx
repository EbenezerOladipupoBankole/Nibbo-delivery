import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col about">
                    <Link to="/" className="logo footer-logo">
                        NÍBBO
                        <svg className="logo-pin" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="var(--primary)" />
                        </svg>
                    </Link>
                    <p className="footer-desc">
                        Your trusted partner for errands and reliable delivery in Abeokuta. We make life simple, one task at a time.
                    </p>
                </div>
                <div className="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/how-it-works">How It Works</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Join Us</h4>
                    <ul>
                        <li><Link to="/become-a-rider">Become a Rider</Link></li>
                        <li><Link to="/become-a-vendor">Become a Vendor</Link></li>
                        <li><Link to="/marketplace">Marketplace</Link></li>
                    </ul>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="container footer-bottom-container">
                    <p>&copy; 2026 Níbbo Logistics. Built for Abeokuta.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
