import React from 'react'
import FlowersSection from './Sections/FlowersSection'
import FooterSection from './Sections/FooterSection'
import JobIntervyuSection from './Sections/JobIntervyuSection'
import MainSection from './Sections/MainSection'
import NavbarSection from './Sections/NavbarSection'

function AllSections() {
    return (
        <div>
            <NavbarSection />
            <MainSection />
            <FlowersSection />
            <JobIntervyuSection />
            <FooterSection />
        </div>
    )
}

export default AllSections
