import React from "react";
import { Link } from "react-router-dom";
import DecorativeText from "../../Typography/decorative-text";

function FrontPageCTA() {
  return (
    <section className="flex-column align-center">
      <DecorativeText size="120">Catchy call to action!</DecorativeText>
      <div>
        Some more text
        <Link to="/register">Register</Link>
      </div>
    </section>
  );
}

export default FrontPageCTA;
