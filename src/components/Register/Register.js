import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            match: false
        }
    }

    changeEmail(e) {
        this.setState({ email: e.target.value });
    }

    changePassword(e) {
        this.setState({ password: e.target.value });
    }

    confirmPassword(e) {
        let confirmation = e.target.value;
        if (this.state.password === confirmation) {
            this.setState({
                password_confirmation: confirmation,
                match: true
            });
            return;
        }
        this.setState({ password_confirmation: confirmation });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.match) {
            const data = {
                // username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }

            console.log(data);

            const url = 'http://localhost:3000/api/signup';

            axios.post(url, data).then(response => {
                console.log(response.data);
                this.props.history.push('/profile');
            }).catch(err => console.log(err));
        }
        console.log("Passwords dont match");
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <h1>Register</h1>
                                    <p className="text-muted">Create your account</p>
                                    <form onSubmit={this.handleSubmit.bind(this)}>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>@</InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="text" placeholder="Email" onChange={this.changeEmail.bind(this)} />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="password" placeholder="Password" onChange={this.changePassword.bind(this)} />
                                        </InputGroup>
                                        <InputGroup className="mb-4">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="icon-lock"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="password" placeholder="Repeat password" onChange={this.confirmPassword.bind(this)} />
                                        </InputGroup>
                                        <Button onClick={this.handleSubmit.bind(this)} color="success" block>Create Account</Button>
                                    </form>
                                </CardBody>
                                <CardFooter className="p-4">
                                    <Row>
                                        <Col xs="12" sm="6">
                                            <Button className="btn-facebook" block><span>facebook</span></Button>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <Button className="btn-twitter" block><span>twitter</span></Button>
                                        </Col>
                                    </Row>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Register;
