import React from 'react'
import Navigation from '../../components/Navigation'
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
        </div>
    )
}

export default LandingPage
