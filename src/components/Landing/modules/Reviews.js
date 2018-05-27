import React from 'react';

class Reviews extends React.Component {
    render () {
        return (
            <div className="section" id="reviews">
                <div className="container w-container">
                    <div className="top-title">
                        <div className="align-center">
                            <div>
                                <h1>Reviews</h1>
                                <div className="sub-second-text">See what other Spark learners are saying</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div data-animation="outin" data-duration="500" data-infinite="1" className="testi-slider w-slider">
                            <div className="w-slider-mask">
                                <div className="w-slide">
                                    <div className="testimonials-wrapper">
                                        <div className="flex-row w-row">
                                            <div className="column-3 w-col w-col-5">
                                                <div className="test-wrapper-photo">
                                                    <div className="testi-photo"></div>
                                                    <div className="testi-overlay-1"></div>
                                                    <div className="testi-overlay-1 second"></div>
                                                </div>
                                            </div>
                                            <div className="w-col w-col-7">
                                                <div className="testi-content">
                                                    <div className="sub-second-text testi">Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Fusce fermentum odio nec</div>
                                                    <div className="top-margin less">
                                                        <h4 className="heading">Natasha Joe</h4>
                                                        <p className="sub-testi-text">CO Founder of Design Studio</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-slide">
                                    <div className="testimonials-wrapper">
                                        <div className="flex-row w-row">
                                            <div className="column-3 w-col w-col-5">
                                                <div className="test-wrapper-photo">
                                                    <div className="testi-photo _2"></div>
                                                    <div className="testi-overlay-1"></div>
                                                    <div className="testi-overlay-1 second"></div>
                                                </div>
                                            </div>
                                            <div className="w-col w-col-7">
                                                <div className="testi-content">
                                                    <div className="sub-second-text testi">Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Fusce fermentum odio nec</div>
                                                    <div className="top-margin less">
                                                        <h4 className="heading">Michael Lee</h4>
                                                        <p className="sub-testi-text">Designer at Webflow</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-arrow w-slider-arrow-left">
                                <img src="assets/img/arrow-left.svg" width="200" />
                            </div>
                            <div className="right-arrow w-slider-arrow-right">
                                <img src="assets/img/arrow-right.svg" />
                            </div>
                            <div className="slide-nav w-slider-nav w-round"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reviews;