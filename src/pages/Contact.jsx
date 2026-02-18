import GetStarted from '../components/GetStarted'

function Contact() {
    return (
        <div className="contact-page" style={{ paddingTop: '80px' }}>
            <div className="page-header" style={{
                padding: '8rem 0 4rem',
                textAlign: 'center',
                background: 'linear-gradient(180deg, var(--light) 0%, var(--white) 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <span className="section-subtitle">Get in Touch</span>
                    <h1 className="section-title" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Contact Níbbo.</h1>
                    <p className="section-description" style={{ fontSize: '1.25rem' }}>
                        Have questions about our logistics services or interested in a partnership? Our team in Abeokuta is ready to assist you.
                    </p>
                </div>
                <div className="blob blob-2 animate-blob" style={{ position: 'absolute', top: '10%', right: '-5%', opacity: 0.05 }}></div>
            </div>

            <GetStarted />

            <section className="contact-info-section" style={{ padding: '8rem 0', backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem'
                    }}>
                        <div className="info-card glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📍</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Our Office</h3>
                            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
                                Abeokuta, Ogun State,<br />
                                Nigeria
                            </p>
                        </div>
                        <div className="info-card glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>📧</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Email Us</h3>
                            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
                                hello@nibbo.delivery<br />
                                support@nibbo.delivery
                            </p>
                        </div>
                        <div className="info-card glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>💬</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>WhatsApp</h3>
                            <p style={{ color: 'var(--gray)', lineHeight: 1.6 }}>
                                +234 XXX XXX XXXX<br />
                                (Instant Support)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
