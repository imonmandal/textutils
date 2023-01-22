import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "primary");
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "warning");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      <Alert alert={alert} />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze below"
                showAlert={showAlert}
                darkMode={darkMode}
              />
            }
          />
          <Route exact path="/about" element={<About darkMode={darkMode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
