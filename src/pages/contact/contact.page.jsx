import React from 'react';

import './contact.style.scss';
import {Form, Button } from 'react-bootstrap';

const contact = () => (
    <div className="contact">
      <Form  className="col-8 mx-auto">
            <Form.Group controlId="emailForm.name">
                <Form.Control type="text" placeholder="name" name="name" />
            </Form.Group>
            <Form.Group controlId="emailForm.email">
                <Form.Control type="email" placeholder="email" name="email" />
            </Form.Group>
            <Form.Group controlId="emailForm.subject">
                <Form.Control type="text" placeholder="subject" name="subject" />
            </Form.Group>
            <Form.Group controlId="emailForm.message">
                <Form.Control as="textarea" rows={5} palceholder="message" name="message" />
            </Form.Group>
            <Button as="input" type="submit" value="Send" variant="secondary" block />
        </Form>  
    </div>
)

export default contact;