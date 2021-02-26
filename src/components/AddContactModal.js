import React, { Component } from 'react'
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';
import axios from 'axios';

export class AddContactModal extends Component {

    state = {
        id: '',
        firstName: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
        email: ''
    }

    contactDataHandler = () => {
        const contact = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
        };
        // console.log(contact);
        axios.post('http://127.0.0.1:8887/contact')
            .then(response => {
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                <Modal
                    // {...props}
                    show={this.props.show}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Contact Info
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Row>
                                <Col>
                                    <Form.Control placeholder="First name" onChange={(event) => this.setState({firstName: event.target.value})}/>
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Last name" onChange={(event) => this.setState({lastName: event.target.value})}/>
                                </Col>
                            </Form.Row>
                            <Form.Control placeholder="Email" onChange={(event) => this.setState({email: event.target.value})}/>
                            <Form.Control placeholder="Phone number" onChange={(event) => this.setState({phoneNumber: event.target.value})}/>
                            <div id="gender-radio">
                                <Form.Check inline label="Male" type="radio" value="male" onChange={(event) => this.setState({gender: event.target.value})}/>
                                <Form.Check inline label="Female" type="radio" value="female" onChange={(event) => this.setState({gender: event.target.value})}/>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.contactDataHandler}>Save</Button>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AddContactModal
