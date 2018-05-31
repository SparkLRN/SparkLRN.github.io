import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Row, Card, CardBody, CardImg, CardTitle } from "reactstrap";

import { MailFunnel, Reviews } from "./index";

// import actions
import { getPartners } from "../../../actions/partnersActions";

class PartnerSection extends React.Component {
    componentDidMount () {
        // dispatch get partners action
        this.props.getPartners();
    }
    render () {
        const partners = this.props.partners.map( partner => {
            return (
                <Card className="partner">
                    <CardImg top width="100%" src={partner.img_src} alt={partner.title} />
                    <CardBody className="textarea">
                        <a href={partner.url} target="blank_">
                            <CardTitle>{partner.title}</CardTitle>
                        </a>
                    </CardBody>
                </Card>
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
                                <div className="sub-second-text">We are intergrated with the best of modern online education</div>
                            </div>
                        </div>
                        <div className="gallery align-center">
                            <Row className="justify-content-center">{partners}</Row>
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getPartners: getPartners
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PartnerSection);
