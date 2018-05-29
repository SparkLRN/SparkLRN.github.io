import React from 'react';

import './styles/Landing.css';

import {
    Header,
    HeroSection,
    AboutSection,
    PartnerSection,
    Footer
} from  './modules/index'

class Landing extends React.Component {
    render () {
        return (
            <div>
                <div className="scroll">
                    <Header />
                    <HeroSection />
                    <AboutSection />
                    <PartnerSection />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Landing;
