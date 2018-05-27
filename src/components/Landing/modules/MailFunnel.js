import React from 'react';

class MailFunnel extends React.Component {
    render () {
        return (
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
        );
    }
}

export default MailFunnel;