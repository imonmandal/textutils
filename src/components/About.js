import React from "react";
import "./About.css";

export default function About(props) {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <h2 style={{ textAlign: "center" }} className="my-3">
        Our Team
      </h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
              alt="Jane"
              style={{ width: "100%" }}
            />
            <div
              className="container"
              style={
                props.darkMode
                  ? {
                      backgroundColor: "#073961",
                    }
                  : {
                      backgroundColor: "white",
                    }
              }
            >
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
              alt="Mike"
              style={{ width: "100%" }}
            />
            <div
              className="container"
              style={
                props.darkMode
                  ? {
                      backgroundColor: "#073961",
                    }
                  : {
                      backgroundColor: "white",
                    }
              }
            >
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000"
              alt="John"
              style={{ width: "100%" }}
            />
            <div
              className="container"
              style={
                props.darkMode
                  ? {
                      backgroundColor: "#073961",
                    }
                  : {
                      backgroundColor: "white",
                    }
              }
            >
              <h2>John Doe</h2>
              <p className="title">Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
