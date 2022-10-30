import React from 'react'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import SectionBanner from '../../components/SectionBanner'
import SectionFaq from '../../components/SectionFaq'
import SectionHero from '../../components/SectionHero'
import SectionOurServices from '../../components/SectionOurServices'
import SectionTesti from '../../components/SectionTestimonial'
import SectionWhyUs from '../../components/SectionWhyUs'

const LandingPage = () => {
    // window.location.reload();
    return (
        <div>
            <Navigation />
            <SectionHero />
            <SectionOurServices />
            <SectionWhyUs />
            <SectionTesti />
            <SectionBanner />
            <SectionFaq />
            <Footer />
        </div>
    )
}

export default LandingPage
