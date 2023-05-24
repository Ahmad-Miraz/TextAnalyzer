import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import { TextForm } from "./components/TextForm";
import { About } from "./components/About";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mood has been activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mood has been activated", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextAnalyst" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Footer mode={mode} />
        {/* <div>
          <Link
            to="/"
            className="container my-5"
            showAlert={showAlert}
            heading="Enter Text Here to Analyze"
            mode={mode}
          />
          <Link to="/about" header="About TextAnalyst" />
        </div> */}
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/" element={<Alert />} />
          <Route
            index
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Text Here to Analyze"
                mode={mode}
              />
            }
          />
          <Route path="/about" element={<About header="About TextAnalyst" mode={mode}/>} />
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
