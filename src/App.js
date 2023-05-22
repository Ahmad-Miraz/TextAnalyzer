import './App.css';
import React from 'react';
// import { About } from './components/About';

import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';
import { useState } from 'react';

function App() {
 const [mode, setMode] = useState('light');
 const toggleMode=()=>{
  if (mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
  }
 }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    {/* <About header="About TextUtils"/> */}
    <div className="container my-5">
    <TextForm  heading="Enter Text Here to Analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
