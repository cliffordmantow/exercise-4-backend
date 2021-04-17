import React from "react";
import Navbar from "../../components/molecules/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-3">
        <div className="container">
          <h3>About</h3>
          <hr />
          <h5>A simple web app</h5>
        </div>
      </div>
    </div>
  );
};

export default About;
