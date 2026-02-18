import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import GetStarted from '../components/GetStarted'
import Gallery from '../components/Gallery'
import './Home.css'

function Home() {
    return (
        <div className="home-page">
            <Hero />
            <Gallery />
            <Services />
            <Testimonials />
            <GetStarted />
        </div>
    )
}

export default Home
