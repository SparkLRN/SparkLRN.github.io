import React from 'react';

import './styles/Landing.css';

import {
    Header,
    HeroSection,
    AboutSection,
    PartnerSection,
    ContactSection,
    Footer,
    Preloader
} from  './modules/index'

class Landing extends React.Component {
    render () {
        return (
            <div>
                {/* <Preloader /> */}
                <div className="scroll">
                    <Header />
                    <HeroSection />
                    <AboutSection />
                    <PartnerSection />
                </div>
                <ContactSection />
                <Footer />
            </div>
        );
    }
}

export default Landing;
