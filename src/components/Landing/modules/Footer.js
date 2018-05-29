import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <div className="container w-container">
                    <div className="w-row">
                        <div className="w-col w-col-4">
                            <div className="footer-column-wrapper">
                                <a href="#home" className="w-inline-block">
                                    <img src="assets/img/logo9.png" width="100" sizes="100px" />
                                </a>
                                <div className="top-margin">
                                    <p className="paragraph-gray in-footer">We &#x27;re your lifelong learning partner,<br />guiding you and motivating you through all your learning adventures.</p>
                                </div>
                                <div className="top-margin">
                                    <div className="social-wrapper left">
                                        <a href="#" className="social-icon w-inline-block">
                                            <i className="fab fa-facebook fa-2x"></i>
                                        </a>
                                        <a href="#" className="social-icon w-inline-block">
                                            <i className="fab fa-twitter-square fa-2x"></i>
                                        </a>
                                        <a href="#" className="social-icon w-inline-block">
                                            <i className="fab fa-slack fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-col w-col-5">
                            <div className="footer-column-wrapper">
                                <h4 className="footer-title">From The Blog</h4>
                                <div className="top-margin">
                                    <div className="w-dyn-list">
                                        <div className="w-dyn-items">
                                            <div className="w-dyn-item">
                                                <a href="/post/history-of-web-design" className="blog-post-wrapper w-inline-block">
                                                    <div style={{backgroundImage:`url(https://uploads-ssl.webflow.com/5a81a646c8f9df000181f36d/5a81c251a7e787000152469e_blog-2.jpg)`}} className="blog-post-photo"></div>
                                                    <div>
                                                        <h4 className="blog-post-title">Learning How To Learn</h4>
                                                        <p className="sub-testi-text in-blog-post">April 6, 2018</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-dyn-item">
                                                <a href="/post/about-graphic-design" className="blog-post-wrapper w-inline-block">
                                                    <div style={{backgroundImage:`url(https://uploads-ssl.webflow.com/5a81a646c8f9df000181f36d/5a81c5adb79c3100018826b8_blog-5.jpg)`}} className="blog-post-photo"></div>
                                                    <div>
                                                        <h4 className="blog-post-title">Notes To My Older Self</h4>
                                                        <p className="sub-testi-text in-blog-post">April 5, 2018</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="w-dyn-item">
                                                <a href="/post/myths-about-design" className="blog-post-wrapper w-inline-block">
                                                    <div style={{backgroundImage:`url(https://uploads-ssl.webflow.com/5a81a646c8f9df000181f36d/5a81c3fb18a3aa00019cab60_blog-3.jpg)`}} className="blog-post-photo"></div>
                                                    <div>
                                                        <h4 className="blog-post-title">On Structured Learning</h4>
                                                        <p className="sub-testi-text in-blog-post">May 4, 2018</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-col w-col-3">
                            <div className="footer-column-wrapper">
                                <h4 className="footer-title">Useful Links</h4>
                                <div className="top-margin">
                                    <a href="#home" className="link">Home</a>
                                    <a href="#about" className="link">About</a>
                                    <a href="#partners" className="link">Partners</a>
                                    <a href="#reviews" className="link">Reviews</a>
                                    <br />
                                    <a href="" className="link">LogIn</a>
                                    <a href="" className="link">Privacy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-divider"></div>
                    <div className="align-center">
                        <p className="copyright"> © 2018 | SparkLRN </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
