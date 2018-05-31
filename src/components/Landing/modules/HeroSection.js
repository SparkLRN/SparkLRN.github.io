import React from 'react';

class HeroSection extends React.Component {
    render () {
        return (
            <div className="content-wrapper top">
                <div id="home" className="banner video">
                    <div data-poster-url="assets/img/hero-poster-02.jpg" data-video-urls="assets/video/hero-video-02.webm,assets/video/hero-video-02.mp4"
                        data-autoplay="true" data-loop="true" data-wf-ignore="true" className="background-video w-background-video w-background-video-atom">
                        <video autoPlay="true" loop="" style={{backgroundImage:`url(assets/img/hero-poster-02.jpg)`}}
                            data-wf-ignore="true">
                            <source src="assets/video/hero-video-02.webm" data-wf-ignore="true"/>
                            <source src="assets/video/hero-video-02.mp4" data-wf-ignore="true"/>
                        </video>
                    </div>
                    <div className="video-overlay">
                        <div className="container center w-container">
                            <div className="align-center">
                                <div className="slider-wrapper">
                                    <h1 className="heading-white">SPARK LEARNING</h1>
                                    <div className="top-margin less">
                                        <div className="sub-second-text white full">We are your learning partner <br /> guiding you and motivating you through all your learning adventures.</div>
                                    </div>
                                    <div className="top-margin">
                                        <a href="/register" className="button w-button">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section top-section">
                    <div className="container top w-container">
                        <div className="top-wrapper">
                            <h1 className="heading-smaller">" When you stop learning, you start dying "</h1>
                            <div className="top-margin">
                                <div className="services-top-wrapper w-clearfix">
                                    <div className="small-services-wrapper">
                                        <i className="far fa-address-card fa-2x"></i>
                                        <div className="services-top-text">Register</div>
                                    </div>
                                    <div className="small-services-wrapper">
                                        <i className="far fa-calendar-check fa-2x"></i>
                                        <div className="services-top-text">Track</div>
                                    </div>
                                    <div className="small-services-wrapper">
                                        <i className="fas fa-expand fa-2x"></i>
                                        <div className="services-top-text">Collaborate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="align-center">
                            <a href="#about" className="arrow-down w-inline-block">
                                <img src="assets/img/arrow-down.svg" width="70"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSection;