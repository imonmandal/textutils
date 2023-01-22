import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const onUpClickHandler = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };
  const wordCount = (txt) => {
    txt = txt.split(" ");
    let c = 0;
    for (let i = 0; i < txt.length; i++) {
      if (txt[i] !== "") {
        c++;
      }
    }
    return c;
  };
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={onChangeHandler}
          style={
            props.darkMode
              ? {
                  backgroundColor: "#073961",
                  color: "white",
                }
              : {
                  backgroundColor: "white",
                  color: "black",
                }
          }
        ></textarea>
        <button
          className="btn btn-primary mx-1 my-3"
          onClick={() => setText("")}
        >
          Clear
        </button>
        <button
          className="btn btn-success mx-1 my-3"
          onClick={onUpClickHandler}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-1 my-3"
          onClick={() => {
            setText(text.toLowerCase());
            props.showAlert("Converted to lowercase", "success");
          }}
        >
          Convert to LowerCase
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p className="my-0">
          {wordCount(text)} words and {text.length} characters
        </p>
        <p className="my-0">{0.008 * wordCount(text)} minutes to read</p>
      </div>
    </>
  );
}
