import React from 'react'
import Navigation from '../../components/Navigation'
import SectionHero from '../../components/SectionHero'
import SectionOurServices from '../../components/SectionOurServices'
import SectionWhyUs from '../../components/SectionWhyUs'

const LandingPage = () => {
    return (
        <div>
            <Navigation />
            <SectionHero />
            <SectionOurServices />
            <SectionWhyUs />
        </div>
    )
}

export default LandingPage
