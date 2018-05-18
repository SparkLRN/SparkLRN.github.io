import React from 'react';

import { connect } from "react-redux";

import { MailFunnel, Reviews } from "./exports";

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
                <MailFunnel />
                <Reviews />
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