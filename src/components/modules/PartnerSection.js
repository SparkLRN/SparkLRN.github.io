import React from 'react';
import { connect } from "react-redux";

class PartnerSection extends React.Component {
    render () {
        const partners = this.props.partners.map( partner => {
            return (
                <div className="content-box" key={partner.id}>
                    <div className="card border-0 transform-on-hover">
                        <img src={partner.img_src} alt="Khan Academy" className="card-img-top" />
                        <div className="card-body grey">
                            <h6><a href={partner.url} target="blank_">{partner.title}</a></h6>
                            <p className="text-muted card-text">{partner.description}</p>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="content-wrapper">
                <div id="partners" data-w-id="0008aa77-fb72-f227-08dc-7ea732a971ec" className="section gray overflow with-line">
                    {/* <div data-w-id="caf55f4c-ec09-4c93-2e5a-0db57afd5797" className="square"></div> */}
                    <div className="container w-container">
                        <div className="top-title">
                            <div className="align-center">
                                <div>
                                    <h1>Partners</h1>
                                </div>
                                <div className="sub-second-text">What are intergrated with the best of modern online education</div>
                            </div>
                        </div>
                        <div className="gallery align-center">
                            <div className="gallery-container">
                                {partners}
                            </div>
                        </div>
                    </div>
                    {/* <div data-w-id="1ff2003f-fcb1-d647-cdce-08ad17e98a40" className="circle"></div> */}
                </div>
                <div className="section gradient less-space">
                    <div className="container w-container">
                        <div className="newsletter-wrapper">
                            <div className="newsletter-content">
                                <h2 className="newsletter-title">Early Birds</h2>
                            </div>
                            <div className="newsletter-content second">
                                <div className="form-block w-form">
                                    <form id="email-form" name="email-form" data-name="Email Form" className="w-clearfix">
                                        <input type="text" className="text-field w-input" maxLength="256" name="email" data-name="Email" placeholder="Enter your email" id="email" required="" />
                                        <input type="submit" value="Join Spark" data-wait="Please wait..." className="button submit w-button" />
                                    </form>
                                    <div className="success-message w-form-done">
                                        <div>Thank you! Watch out for our mail with the next steps :)</div>
                                    </div>
                                    <div className="error-message w-form-fail">
                                        <div>Oops! Something went wrong while submitting your email.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        partners: state.partners.partners
    }
}

export default connect(mapStateToProps)(PartnerSection);