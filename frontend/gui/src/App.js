import React from 'react';
import Scania from './components/Scania';
import Navbar from './components/Navbar';
import './styles/main.css';
import Top_info from './components/Top_info';
import First_section from './components/First_section';
 

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Scania />
      <Top_info />
      <First_section />


    </div>
  );
}

export default App;
