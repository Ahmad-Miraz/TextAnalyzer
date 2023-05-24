import React, { useState } from "react";
import PropTypes from "prop-types";




export const TextForm = (props) => {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const changeUpperCaseClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase","success");
  };
  const changeLowerCaseClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase","success");
  };
  const clearButton = () => {
    const newText = "";
    setText(newText);
    props.showAlert('Text Cleared','success');
  };
  // let myStyle = {
  //   fontStyle: "italic"
  // };
  
  const changeToItalic = () => {
    let newText =text;
    setText(newText);

    props.showAlert('Text Converted to Italic','success');
  };
  

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert('Text Copied','success');
}
const handleExtraSpaces = () => {
  const newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert('Extra Space Removed','success');
}
  return (
    <>
      <div className="mb-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className="text-center">{props.heading}</h1>
        <textarea
          className="form-control my-2"
          value={text}
          placeholder="Enter Text Here..."
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={changeUpperCaseClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={changeLowerCaseClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={changeToItalic} id="myStyle">
          Italic
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={clearButton}>
          Clear
        </button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").length - 1} Words and {text.length} Characters
        </p>
        <p>
          You will need {0.008 * text.split(" ").length-0.008} minutes to read this
          text.{" "}
        </p>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Text Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
};
TextForm.prototypes = {
  heading: PropTypes.string,
};
