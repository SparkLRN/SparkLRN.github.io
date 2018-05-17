import React from 'react';

import {
    Header,
    HeroSection,
    Footer
} from  '../modules/exports'

class LandingPage extends React.Component {
    render () {
        return (
            <div>
                <Header />
                <HeroSection />
                <Footer />
            </div>
        );
    }
}

export default LandingPage;
