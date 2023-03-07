import React from "react";

function Hero() {
  return (
    <div>
      <br />
      <br />
      <br />
      {/*hero*/}
      <div
        className="hero-body"
        style={{
          height: "500px",
          marginLeft: "31px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "59%" }}>
          <p
            style={{
              fontFamily: "Raleway",
              fontWeight: "bold",
              color: "white",
              fontSize: "75px",
              lineHeight: "25px",
            }}
          >
            Liviru
          </p>
          <p
            style={{
              fontFamily: "Raleway",
              fontWeight: "bold",
              color: "white",
              fontSize: "75px",
            }}
          >
            Samarawickrama
          </p>
          <h1
            className="font-family:IBM Plex Mono; subtitle"
            style={{ color: "white", lineHeight: "50px" }}
          >
            UI/UX Engineer | Undergraduate
          </h1>
          <button
            className="button is-primary"
            style={{ width: "30%", height: "45px" }}
          >
            See my Work here &gt;
          </button>
        </div>
        <div style={{ width: "41%" }}>
          <img
            src="photo.jpg"
            style={{
              position: "relative",
              height: "400px",
              width: "400px",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
