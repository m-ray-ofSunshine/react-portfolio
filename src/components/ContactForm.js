import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import "./assets/styles/contact.css"
import linkedin from "./assets/images/LI-In-Bug.png"
import github from "./assets/images/GitHub-Mark-64px.png"

function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_2r2pble';
            const templateId = 'template_wypyk19';
            const userId = 'user_Alx0Yvnbt7gLLoNoVorBt';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }



    return (
        <div id="contactForm" style={{
            backgroundColor: 'rgba(151, 173, 198, 0.6)',
           
            borderRadius: "10px",
            marginBottom:"20vh"
            

        }}>
            <h2 className="mt-2">Contact me</h2>
            <a href="www.linkedin.com/in/matthew-james-ray" target="_blank" className="m-2">
                <img src={linkedin} style={{height:"7vh"}}/>
            </a>
            <a href="https://github.com/m-ray-ofSunshine" target="_blank" className="m-2">
                <img src={github} style={{height:"7vh"}}/>
            </a>
            <p className="m-2">Email: matthew.j.ray95@gmail.com </p>
            <div id="contact-form" className="mb-3">
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
            <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button className="btn btn-primary" onClick={submit}>Send Message</button>
            <span className={emailSent ? 'visible' : null}>Thank you for your message, I will be in touch in no time!</span>
            </div>
        </div>

    )
}
export default ContactForm;