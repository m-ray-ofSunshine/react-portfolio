import React, { useState, useRef, useEffect } from 'react';


function Container(props) {
  

    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();



    useEffect(() => {
        let current = domRef.current
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(current);
        return () => observer.unobserve(current);
    }, []);
    return (
        <div className={`d-flex col-12 justify-content-center fade-in-section  ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {props.content}
        </div>
    );
}



export default Container;