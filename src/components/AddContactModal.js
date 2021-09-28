import React, { Component } from 'react'
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

const AddContactModal = (props) => {

    const [id, setId] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        // console.log(props.contact);

        // setId(props.contact.id);
        // setFirstName(props.contact.firstName);
        // setLastName(props.contact.lastName);
        // setGender(props.contact.gender);
        // setPhoneNumber(props.contact.phoneNumber);
        // setEmail(props.contact.email);
    });

    const contactDataHandler = () => {
        // console.log(firstName, lastName, gender);
        if(props.contactModalState == 0) {
            axios.post('http://immense-peak-05874.herokuapp.com/api/contact', {
            firstName: firstName,
            lastName: lastName,
            gender: gender == 'male' ? 'm' : 'f',
            phoneNumber: phoneNumber,
            email: email
        })
        .then(response => {
            console.log(response);
            props.onHide();
        });
        } else {
            axios.put('http://immense-peak-05874.herokuapp.com/api/contact/' + {id}, {
            firstName: firstName,
            lastName: lastName,
            gender: gender == 'male' ? 'm' : 'f',
            phoneNumber: phoneNumber,
            email: email
            })
            .then(response => {
                console.log(response);
                props.onHide();
            });
        }
    }
    
    const cleanUpContactInfo = async() => {
        setId(null);
        setFirstName('');
        setLastName('');
        setGender('');
        setPhoneNumber('');
        setEmail('');
    }

    const closeContactModal = () => {
        cleanUpContactInfo().then(
            props.onHide
        )
    };

    return (
        <div>
            <Modal
                // {...props}
                show={props.show}
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
                                <Form.Control placeholder="First name" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                            </Col>
                        </Form.Row>
                        <Form.Control placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        <Form.Control placeholder="Phone number" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
                        <div id="gender-radio">
                            <Form.Check inline label="Male" type="radio" value="male" onChange={(event) => setGender(event.target.value)}/>
                            <Form.Check inline label="Female" type="radio" value="female" onChange={(event) => setGender(event.target.value)}/>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={contactDataHandler}>Save</Button>
                    <Button onClick={closeContactModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddContactModal
