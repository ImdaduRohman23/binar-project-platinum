import React from 'react'
import Navigation from '../../components/Navigation'
import SectionBanner from '../../components/SectionBanner'
import SectionFaq from '../../components/SectionFaq'
import SectionHero from '../../components/SectionHero'
import SectionOurServices from '../../components/SectionOurServices'
import SectionTesti from '../../components/SectionTestimonial'
import SectionWhyUs from '../../components/SectionWhyUs'

const LandingPage = () => {
    return (
        <div>
            <Navigation />
            <SectionHero />
            <SectionOurServices />
            <SectionWhyUs />
            <SectionTesti />
            <SectionBanner />
            <SectionFaq />
        </div>
    )
}

export default LandingPage
