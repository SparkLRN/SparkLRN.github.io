import React from 'react';

class AboutSection extends React.Component {
    render () {
        return (
            <div className="content-wrapper">
                <div id="about" className="content-wrapper-second">
                    <div className="container w-container">
                        <div className="top-title">
                            <div className="align-center ">
                                <div>
                                    <h1>About</h1>
                                </div>
                                <div className="sub-second-text">Spark works in three simple steps...</div>
                            </div>
                        </div>
                    </div>
                    <div className="section flex w-clearfix">
                        <div className="left-part _1"></div>
                        <div className="left-part smaller">
                            <h1 className="number-features">01.</h1>
                            <div className="features-center">
                                <i className="far fa-address-card fa-5x"></i>
                                <div className="services-top-text big">Register</div>
                                <p className="paragraph-gray">Register for a Spark account.<br />
                                    Link your favorite learning platforms with just one click, its so easy and we will still walk you through it<br />
                                    <i className="fa fa-smile"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section flex w-hidden-medium w-hidden-small w-hidden-tiny w-clearfix">
                        <div className="left-part smaller">
                            <h1 className="number-features">02.</h1>
                            <div className="features-center">
                                <i className="far fa-calendar-check fa-5x"></i>
                                <div className="services-top-text big">Track</div>
                                <p className="paragraph-gray">We automatically start tracking your learning progress on the linked platforms.
                                <br /> From our open AI and experts, we give you combined insight on what works best and what doesn't for your learning, all
                                    personalized
                                <br />
                                    <a href="" target="blank_">Learn more</a><br />
                                    <i className="fas fa-angle-double-right"></i>
                                </p>
                            </div>
                        </div>
                        <div className="left-part _2"></div>
                    </div>
                    <div className="section flex w-hidden-main w-clearfix">
                        <div className="left-part _2"></div>
                        <div className="left-part smaller">
                            <h1 className="number-features">02.</h1>
                            <div className="features-center">
                                <i className="far fa-calendar-check fa-5x"></i>
                                <div className="services-top-text big">Track</div>
                                <p className="paragraph-gray">We automatically start tracking your learning progress on the linked platforms.<br />
                                    From our open AI and experts, we give you combined insight on what works best and what doesn't for your learning, all personalized<br />
                                    <a href="" target="blank_">Learn more</a><br />
                                    <i className="fas fa-angle-double-right"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section flex w-clearfix">
                        <div className="left-part _3"></div>
                        <div className="left-part smaller round">
                            <h1 className="number-features">03.</h1>
                            <div className="features-center">
                                <i className="fas fa-expand fa-5x"></i>
                                <div className="services-top-text big">Collaborate</div>
                                <p className="paragraph-gray">Invite friends and family to courses, join learning groups, mentor others or get mentored.<br />
                                    We believe learning is a journey. Our job is to make that journey as fun as possible with friends<br />
                                    <i className="fa fa-thumbs-up"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutSection;