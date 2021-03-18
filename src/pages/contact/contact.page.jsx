import React, {useState} from 'react';
import styled from 'styled-components';

import location from '../../assets/cayaLocation.png'
import './contact.style.scss';
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';

import {FaMapMarkerAlt, FaWhatsapp} from 'react-icons/fa';

const StyledForm = styled.div` 
    .contact{
        display: flex;
        flex-direction: column;
        margin: 20px auto;
        width: 50%;

        input, textarea {
            margin: 5px;
            padding: 5px;
        }
    };

    .message {
        height: 300px;
        margin: 20px auto;
        width: 50%;
        border: 1px solid black;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;


function Contact() {

    const [sent, setSent] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_6c6yjf6', 'template_lebus0m', e.target, 'user_PN787ZbGoN9scOEwOAcQP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          alert("Message Sent");
          setSent(!sent);
      }


    return(
        <div className="contact">
            <h1>Contact us</h1>
            <h2>Stop in for an order or order by WhatsApp</h2>
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
        
        <StyledForm>
            {sent ? <Fade><div className="message"><h1 className="messagesent">Message Sent</h1></div></Fade> :
            <form className="contact" onSubmit={sendEmail} >
                <input type="text" placeholder="name" name="name"  />
                <input type="email" placeholder="email" name="email"  />
                <input type="text" placeholder="subject" name="subject"  />
                <textarea rows="5" palceholder="message" name="message"  />
                <input type="submit" value="send"  />
            </form> 
            } 
            </StyledForm>
        </div>
      )
}

export default Contact;