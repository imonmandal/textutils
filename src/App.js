import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <TextForm
        heading="Enter the text to analyze below"
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      {/* <About /> */}
    </>
  );
}

export default App;
