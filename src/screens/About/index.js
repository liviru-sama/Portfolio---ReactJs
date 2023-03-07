import React from "react";

function About() {
  return (
    <div>
      <div className="hero-body">
        <div className="container" id="about">
          <p
            style={{
              fontFamily: "Raleway",
              fontWeight: "bold",
              color: "white",
              fontSize: "75px",
            }}
          >
            Here who I am &amp; What I do
          </p>
          <br />
          <div>
            <div className="columns is-mobile is-centered is-vcentered">
              <div className="column">
                <span className="subtitle" style={{ color: "white" }}>
                  As a UI/UX engineer, I have a strong foundation in
                  user-centered design and a passion for creating intuitive and
                  visually appealing digital experiences. My skills include
                  wireframing, prototyping, user research, and front-end
                  development. I have experience designing and developing
                  responsive web applications and mobile apps for a variety of
                  industries, including e-commerce, healthcare, and education. I
                  have a keen eye for detail and a dedication to creating
                  high-quality products that meet the needs of users. In my
                  previous role at ProCODE Company, I was responsible for
                  leading the redesign of the company's e-commerce platform,
                  resulting in a 20% increase in conversion rate. I also
                  conducted user research to gather feedback and insights, which
                  informed the design decisions for the project. I am proficient
                  in tools such as Sketch, InVision, and HTML/CSS, and I have a
                  strong understanding of usability principles and design
                  patterns. I am a team player and thrive in collaborative
                  environments, where I can contribute my skills and ideas to
                  create the best possible product.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
