import React, { useState, useRef, useEffect } from 'react';
import AboutPage from "./AboutPage"
import Projects from "./Projects"
import Resume from "./Resume"
import ContactForm from "./ContactForm"

function Container(props) {
  

    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();



    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div className={`d-flex col-12 justify-content-center fade-in-section  ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {props.content}
        </div>
    );
}



export default Container;