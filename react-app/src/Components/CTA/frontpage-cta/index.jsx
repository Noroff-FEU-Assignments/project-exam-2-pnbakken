import React from "react";
import { Link } from "react-router-dom";
import DecorativeText from "../../Typography/decorative-text";

function FrontPageCTA() {
  return (
    <section className="flex-row justify-center">
      <div>
        <DecorativeText size={120}>Catchy call to action!</DecorativeText>
        <div className="flex-column">
          <span>Some more text</span>
          <Link to="/register">Register</Link>
        </div>
        <div>
          Already registered? <Link to="/login">Log In</Link>
        </div>
      </div>
    </section>
  );
}

export default FrontPageCTA;
