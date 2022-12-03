import React from "react";
import { Link } from "react-router-dom";
import DecorativeText from "../../Typography/decorative-text";
import splashImage from "../../../assets/image/splash-image.png";
import BrandButton from "../../Buttons/brand-button";

function FrontPageCTA() {
  return (
    <section className="flex-r full-width full-height wrap justify-center gap-md">
      <div className="standard-component-width full-width flex-c  gap-sm">
        <DecorativeText size={100}>Join our friendly community!</DecorativeText>
        <div className="flex-c gap-md align-center">
          <div className="flex-c align-center gap-xs">
            <span>Register your account now</span>
            <Link to="/register" c>
              <BrandButton>Register</BrandButton>
            </Link>
          </div>
          <div className="flex-c align-center">
            <span>Already registered?</span>{" "}
            <Link to="/login" className="primary-text">
              Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="smaller-component-width">
        <img src={splashImage} alt="Welcome to Just Post" />
      </div>
    </section>
  );
}

export default FrontPageCTA;
