import React from 'react';

class ContactSection extends React.Component {
    render () {
        return (
            <div className="content-wrapper">
                <div id="contact" data-w-id="ca1fb17f-0e76-27c6-36a6-6d14f3f24200" className="section gradient overflow">
                    <div className="container w-container">
                        <div className="flex-row not-flex w-row">
                            <div className="column w-col w-col-5 w-col-stack">
                                <div className="top-title half">
                                    <div>
                                        <div>
                                            <h1 className="heading-white">Contact Us</h1>
                                            <div className="sub-second-text white">Have feedback? Say hello?<br />Please drop us a line</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="w-form">
                                        <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form">
                                            <input type="text" className="text-field normal w-input" maxLength="256" name="name" data-name="Name" placeholder="Enter your name" id="name" required="" />
                                            <input type="text" className="text-field normal w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="Enter your email" id="email-2" required="" />
                                            <input type="text" className="text-field normal w-input" maxLength="256" name="Subject" data-name="Subject" placeholder="Subject" id="Subject" required="" />
                                            <textarea id="Message" name="Message" placeholder="Enter your message" maxLength="5000" data-name="Message" className="text-field normal area w-input"></textarea>
                                            <input type="submit" value="Send Message" data-wait="Please wait..." className="button blue full w-button" />
                                        </form>
                                        <div className="success-message w-form-done">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="error-message w-form-fail">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-col w-col-1 w-col-stack"></div>
                            <div className="w-col w-col-6 w-col-stack w-hidden-medium w-hidden-small w-hidden-tiny">
                                <div className="big-image in-div "></div>
                            </div>
                        </div>
                    </div>
                    <div data-w-id="b5f26f62-7454-9483-1e2e-eae8eacdf969" className="circle second"></div>
                </div>
            </div>
        );
    }
}

export default ContactSection;
