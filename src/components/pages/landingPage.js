import React from 'react';

import {
    Header,
    HeroSection,
    AboutSection,
    PartnerSection,
    ContactSection,
    Footer,
    Preloader
} from  '../modules/exports'

class LandingPage extends React.Component {
    render () {
        return (
            <div>
                {/* <Preloader /> */}
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
