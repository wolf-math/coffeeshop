import React from 'react';

import location from '../../assets/cayaLocation.png'
import './contact.style.scss';
import {Form, Button } from 'react-bootstrap';

import {FaMapMarkerAlt, FaWhatsapp} from 'react-icons/fa';

const contact = () => (
    <div className="contact">
        <h1>Contact us</h1>
        <h2>Stop in for an order or send us a WhatsApp</h2>
        <img src={location} alt="location" className="map"/>
        <div className="locations">
            <a href="https://www.google.com/maps/place/Borokhov+St+5,+Ra'anana/@32.180789,34.8739767,17z/data=!3m1!4b1!4m5!3m4!1s0x151d38132a907827:0x26d1806ec58e3d19!8m2!3d32.180789!4d34.8761654">
            <div className="physaddress location">
                <h3><FaMapMarkerAlt /> Borochov Street 5, Ra'anana</h3>
            </div>
            </a>
            <a href="https://api.whatsapp.com/send?phone=972586788322">
            <div className="phone location">
                <h3><FaWhatsapp /> 058-678-8322</h3>
            </div>
            </a>
        </div>
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