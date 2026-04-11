import Hero from '../components/Hero'
import HomeFeatures from '../components/HomeFeatures'
import './Home.css'

function Home() {
    return (
        <div className="home-page">
            <Hero />
            <HomeFeatures />
            
            <section className="home-cta container">
                <div className="cta-content">
                    <h2>Too busy to run errands?</h2>
                    <p>Let Níbbo handle it for you.</p>
                    <a href="https://wa.me/2348123456789" className="btn-primary large animate-pulse">
                        👉 Chat us on WhatsApp now
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Home

