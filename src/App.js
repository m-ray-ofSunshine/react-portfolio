import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Container from "./components/Container"
import AboutPage from "./components/AboutPage"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import ContactForm from "./components/ContactForm"


function App() {
  const [currentPage, setCurrentPage] = useState('About me');
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App row container-fluid  d-flex" >

      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Container content={<AboutPage/>} />
      <div style={{height:"40vh"}}>
      </div>
      <Container content={<Projects/>}/>
      <div style={{height:"40vh"}}>
      </div>
      <Container content={<Resume/>}/>
      <div style={{height:"40vh"}}>
      </div>
      <Container content={<ContactForm/>}/>
      
    </div>
  );
}

export default App;
