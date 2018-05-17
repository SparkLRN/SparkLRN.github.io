import React from 'react';

import {
    Header,
    HeroSection,
    AboutSection,
    Footer
} from  '../modules/exports'

class LandingPage extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <HeroSection />
                <AboutSection />
                <Footer />
            </div>
        );
    }
}

export default LandingPage;
