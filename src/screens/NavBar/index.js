import React from "react";
import "bulma/css/bulma.min.css";

function NavBar() {
  return (
    <nav
      className="is-light"
      role="navigation"
      aria-label="main navigation"
      style={{ backgroundColor: "white", height: "92px" }}
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className="navbar-menu"
        background-color="black"
      >
        <div className="navbar-end">
          <a href="#home" className="navbar-item mr-6">
            Home
          </a>
          <a href="#about" className="navbar-item mr-6">
            About
          </a>
          <a href="#education" className="navbar-item mr-6">
            Education
          </a>
          <a href="#recent" className="navbar-item mr-6">
            Recent Work
          </a>
          <a href="#contact" className="navbar-item mr-6">
            Get In Touch
          </a>
        </div>
        {/* <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div> */}
      </div>
    </nav>
  );
}

export default NavBar;
