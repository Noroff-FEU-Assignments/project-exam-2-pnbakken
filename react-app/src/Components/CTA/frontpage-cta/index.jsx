import React from "react";
import { Link } from "react-router-dom";
import DecorativeText from "../../Typography/decorative-text";
import splashImage from "../../../assets/image/splash-image.png";

function FrontPageCTA() {
  return (
    <section className="flex-row full-width full-height wrap justify-center">
      <div>
        <DecorativeText size={120}>Catchy call to action!</DecorativeText>
        <div className="flex-col">
          <span>Some more text</span>
          <Link to="/register">Register</Link>
        </div>
        <div>
          Already registered? <Link to="/login">Log In</Link>
        </div>
      </div>
      <div>
        <img src={splashImage} />
      </div>
    </section>
  );
}

export default FrontPageCTA;
