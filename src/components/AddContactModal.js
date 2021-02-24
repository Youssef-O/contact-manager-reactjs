import React, { Component } from 'react'
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';

export class AddContactModal extends Component {
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
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Last name" />
                                </Col>
                            </Form.Row>
                            <Form.Control placeholder="Email" />
                            <Form.Control placeholder="Phone number" />
                            <div id="gender-radio">
                                <Form.Check inline label="Male" type="radio" id="male-radio" name="gender"/>
                                <Form.Check inline label="Female" type="radio" id="female-radio" name="gender"/>
                            </div>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>Save</Button>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AddContactModal
