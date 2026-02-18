import Header from '../components/Header'
import ChooseYourPath from '../components/ChooseYourPath'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

function GetInvolved() {
    return (
        <div className="get-involved-page" style={{ paddingTop: '80px' }}>
            <div className="page-header" style={{
                padding: '10rem 0 6rem',
                textAlign: 'center',
                background: 'linear-gradient(180deg, var(--light) 0%, var(--white) 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <span className="section-subtitle">Join Níbbo</span>
                    <h1 className="section-title" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Together, we move Abeokuta.</h1>
                    <p className="section-description" style={{ fontSize: '1.25rem' }}>
                        Whether you are looking to simplify your life, earn extra income, or grow your business, there is a place for you in the Níbbo family.
                    </p>
                </div>
                <div className="blob blob-1 animate-blob" style={{ position: 'absolute', top: '-10%', left: '-5%', opacity: 0.05 }}></div>
            </div>
            <ChooseYourPath />
            <GetStarted />
        </div>
    )
}

export default GetInvolved
