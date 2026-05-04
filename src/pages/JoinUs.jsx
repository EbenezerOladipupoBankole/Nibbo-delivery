import ChooseYourPath from '../components/ChooseYourPath'
import './Home.css' // Reuse home styles for spacing or create JoinUs.css

function JoinUs() {
    return (
        <div className="join-us-page" style={{ paddingTop: '100px' }}>
            <ChooseYourPath />
            
            <section className="cta-section container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '1rem', color: 'var(--dark)' }}>Still Have Questions?</h2>
                <p style={{ marginBottom: '2rem', color: 'var(--dark-lighter)' }}>Our team is ready to help you get started on your journey with Níbbo.</p>
                <a href="/contact" className="btn-primary">Contact Support</a>
            </section>
        </div>
    )
}

export default JoinUs
