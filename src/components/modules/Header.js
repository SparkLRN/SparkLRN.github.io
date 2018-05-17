import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <div data-collapse="medium" data-animation="default" data-duration="400" className="navigation w-nav">
                <a href="/" className="w-nav-brand">
                    <img src="assets/img/logo9.png" width="100" />
                </a>
                <div className="container w-container">
                    <nav role="navigation" className="nav-menu w-nav-menu">
                        <a href="#home" className="nav-link w-nav-link">Home</a>
                        <a href="#about" className="nav-link w-nav-link">About</a>
                        <a href="#partners" className="nav-link w-nav-link">Partners</a>
                        <a href="#reviews" className="nav-link w-nav-link">Reviews</a>
                        <a href="#contact" className="nav-link w-nav-link">Contact</a>
                    </nav>
                    <div className="menu-button w-nav-button">
                        <div className="w-icon-nav-menu"></div>
                    </div>
                </div>
                <div className="div-block w-hidden-medium w-hidden-small w-hidden-tiny">
                    <nav role="navigation" className="nav-menu w-nav-menu">
                        <a href="" className="nav-link w-nav-link">LogIn / SignUp</a>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;