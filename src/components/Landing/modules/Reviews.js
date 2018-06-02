import React from 'react';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import actions
import { getReviews } from "../../../actions/reviewsActions";

import { Row, Col } from "reactstrap";

class Reviews extends React.Component {

    componentDidMount() {
        this.props.getReviews();
    }

    render () {
        const reviews = this.props.reviews.map( review => {
            return (
                <div key={review.id} className="w-slide">
                    <div className="reviews-wrapper">
                        <Row className="justify-content-center">
                            <Col md="5" className="column-3 w-col">
                                <div className="rev-photo-wrapper">
                                    <div className="rev-photo" style={{ backgroundImage: `url(${review.profile.photo})` }}></div>
                                </div>
                            </Col>
                            <Col md="7">
                                <div className="rev-content">
                                    <div className="sub-second-text rev">{review.review}</div>
                                    <div className="top-margin less">
                                        <h4 className="heading">{review.profile.name}</h4>
                                        <p className="sub-rev-text">{review.profile.role}</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            )
        })
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
                        <div data-animation="outin" data-duration="500" data-infinite="1" className="review-slider">
                            <div className="w-slider-mask">
                                { reviews }
                            </div>
                            <div className="right-arrow w-slider-arrow-left">
                                <img src="assets/img/arrow-left.svg" alt="" width="200" />
                            </div>
                            <div className="right-arrow w-slider-arrow-right">
                                <img src="assets/img/arrow-right.svg" alt="" />
                            </div>
                            <div className="slide-nav w-slider-nav w-round"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        reviews: state.reviews.reviews
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getReviews: getReviews
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
