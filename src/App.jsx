import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import GetInvolved from './pages/GetInvolved'
import Contact from './pages/Contact'
import './App.css'

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/get-involved" element={<GetInvolved />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
