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
  };
  const changeLowerCaseClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };
  const clearButton = () => {
    const newText = "";
    setText(newText);
  };
  // let myStyle={
  //   fontStyle:"italic"
  // }
  const changeToItalic = () => {
    const newText = text;
    // <span style={myStyle}>newText</span>
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text); 
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
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
        <button className="btn btn-primary mx-2" onClick={changeToItalic}>
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
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Text Preview</h1>
        <p>
          You will need {0.008 * text.split(" ").length} minutes to read this
          text.{" "}
        </p>
        <p>{text}</p>
      </div>
    </>
  );
};
TextForm.prototypes = {
  heading: PropTypes.string,
};
