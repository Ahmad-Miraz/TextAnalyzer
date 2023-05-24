import './App.css';
import React from 'react';
// import { About } from './components/About';

import Navbar from './components/Navbar';
import { TextForm } from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null)

 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  },1500);
 }
 const toggleMode=()=>{
  if (mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mood has been activated", "success");
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light Mood has been activated", "success");
  }
 }
  return (
    <>
    <Navbar title="TextAnalyst" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    {/* <About header="About TextUtils"/> */}
    <div className="container my-5">
    <TextForm showAlert={showAlert} heading="Enter Text Here to Analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
