import React from "react";

function Contact() {
  return (
    <div>
      <div className="hero-body" style={{ height: "800px" }}>
        <div className="container" id="recent">
          <p
            style={{
              fontFamily: "Raleway",
              fontWeight: "bold",
              color: "white",
              fontSize: "75px",
            }}
          >
            Recent Work
          </p>
          <br />
          <br />
          <div>
            <div className="columns is-mobile is-centered is-vcentered">
              <div className="column">
                <img
                  src="work1.png"
                  style={{
                    position: "relative",
                    height: "300px",
                    width: "480px",
                    textAlign: "center",
                  }}
                  alt=""
                />
                <br />
                <br />
                <span className="title is-2" style={{ color: "white" }}>
                  <h6>Creativo Arquitectos</h6>
                </span>
                <br />
                <button
                  className="button is-primary"
                  style={{ width: "auto", marginLeft: "0%" }}
                >
                  Know more &gt;
                </button>
              </div>
              <div className="column">
                <img
                  src="work2.png"
                  style={{
                    position: "relative",
                    height: "300px",
                    width: "480px",
                    textAlign: "center",
                  }}
                  alt=""
                />
                <br />
                <br />
                <span className="title is-2" style={{ color: "white" }}>
                  <h6>Sanders</h6>
                </span>
                <br />
                <button
                  className="button is-primary"
                  style={{ width: "auto", marginLeft: "0%" }}
                >
                  Know more &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-body" style={{ height: "200px" }}>
        <div className="container" id="contact">
          <div>
            <br className="columns is-mobile is-centered is-vcentered" />
            <div className="column">
              <p
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "75px",
                  marginLeft: "33%",
                }}
              >
                Get In Touch
              </p>
            </div>
          </div>
        </div>
      </div>
      <form className="box" style={{ width: "30%", marginLeft: "35%" }}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Please enter your email"
            />
          </div>
        </div>
      </form>
      <form className="box" style={{ width: "30%", marginLeft: "35%" }}>
        <div className="field">
          <label className="label">Mobile</label>
          <div className="control">
            <input className="input" type="email" placeholder="Enter mobile" />
          </div>
        </div>
      </form>
      <form className="box" style={{ width: "30%", marginLeft: "35%" }}>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Enter your messsage"
            />
          </div>
        </div>
      </form>
      <button
        className="button is-primary"
        style={{ width: "30%", height: "45px", marginLeft: "35%" }}
      >
        Send &gt;
      </button>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Contact;
