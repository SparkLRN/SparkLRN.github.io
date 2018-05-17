import React from 'react';

import {
    Header,
    HeroSection,
    AboutSection,
    PartnerSection,
    ContactSection,
    Footer
} from  '../modules/exports'

class LandingPage extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <HeroSection />
                <AboutSection />
                <PartnerSection />
                <ContactSection />
                <Footer />
            </div>
        );
    }
}

export default LandingPage;
