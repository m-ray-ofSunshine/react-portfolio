import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Container from "./components/Container"

function App() {
  const [currentPage, setCurrentPage] = useState('About me');
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="App container row" style={{height:"100%"}}>

      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Container currentPage={currentPage}/>
      
    </div>
  );
}

export default App;
