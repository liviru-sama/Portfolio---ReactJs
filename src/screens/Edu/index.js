import React from "react";

function Edu() {
  return (
    <div className="hero-body" style={{ height: "500px" }}>
      <div className="container">
        <div>
          <br className="columns is-mobile is-centered is-vcentered" />
          <div className="column" id="education">
            <p
              style={{
                fontFamily: "Raleway",
                fontWeight: "bold",
                color: "white",
                fontSize: "75px",
              }}
            >
              Education
            </p>
            <br />
            <information className="subtitle" style={{ color: "white" }}>
              School - Rahula College, Matara.
              <br />
              <br />
              Information Systems Undergraduate at University of Colombo School
              of Computing (UCSC)
            </information>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Edu;
