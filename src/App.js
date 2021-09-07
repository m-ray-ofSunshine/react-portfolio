import React from 'react';
import './App.css';
import Header from './components/Header'
import Container from "./components/Container"
import AboutPage from "./components/AboutPage"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import ContactForm from "./components/ContactForm"
import Footer from './components/Footer';


function App() {
  
  
  return (
    <div className="App row  d-flex" >

      <Header/>
      <div id="aboutMe" style={{height:"15vh"}}>
      </div>
      <Container content={<AboutPage/>} />
      <div id="projects" style={{height:"15vh"}}>
      </div>
      <Container content={<Projects/>}/>
      <div id="resume" style={{height:"12vh"}}>
      </div>
      <Container content={<Resume/>}/>
      <div id="contactForm" style={{height:"25vh"}}>
      </div>
      <Container content={<ContactForm/>}/>
      <Footer/>
    </div>
  );
}

export default App;
