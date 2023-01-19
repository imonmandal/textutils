import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const onUpClickHandler = () => {
    setText(text.toUpperCase());
  };
  const onChangeHandler = (event) => {
    setText(event.target.value);
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
          onClick={() => setText(text.toLowerCase())}
        >
          Convert to LowerCase
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p className="my-0">
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p className="my-0">{0.008 * text.split(" ").length} minutes to read</p>
      </div>
    </>
  );
}
