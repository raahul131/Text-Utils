import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

export default function Navbar(props) {
  const blue = () => {
    props.toggleMode("blue");
  };

  const white = () => {
    props.toggleMode("white");
  };
  
  const black = () => {
    props.toggleMode("black");
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      // style={{ color: props.color === "white" ? "black" : "white" }}
      style={{
        backgroundColor: props.color === 'white' ? 'red' : '#061f34',
        color: props.color === "black" ? "white" : "white",
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#"style={{color: props.color === "light" ? "#0d6efd" : "white",}}>
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link"aria-current="page" href="#"style={{color: "white",}}>
                Home
              </a> */}
            </li>
          </ul>
  
          <div>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={blue}
            >
              Blue
            </button>

            <button
              type="button"
              className="btn btn-light mx-2"
              onClick={white}
            >
              Light
            </button>
            <button
              type="button"
              className="btn btn-dark mx-2"
              onClick={black}
            >
              Dark
            </button>
            <label
              className="form-check-label text-light"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.text}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
};