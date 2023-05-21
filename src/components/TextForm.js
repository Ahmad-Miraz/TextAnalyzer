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
  return (
    <>
      <div className="mb-3">
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
        <button className="btn btn-primary mx-2" onClick={clearButton}>
          Clear
        </button>
      </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>{text.split(" ").length-1} Words and {text.length} Characters</p>
      </div>
      <div className="container">
        <h1>
            Text Preview
        </h1>
        <p>You will need {0.008*text.split(" ").length} minutes to read this text. </p>
        <p>{text}</p>
      </div>
    </>
  );
};
TextForm.prototypes = {
  heading: PropTypes.string,
};
