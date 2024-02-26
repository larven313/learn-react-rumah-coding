import React from "react";
import imgHTML from "../images/html.png";
import imgCSS from "../images/css.png";
import imgJavaScript from "../images/javascript.png";
import imgReact from "../images/react-icon.png";
import "./Card.css";

const Card = ({ title, subtitle, img }) => {
  return (
    <div className="container">
      {/* <p>Hello card</p>
      <img src={imgReact} alt="" className="img" />
      <img src={imgHTML} alt="" className="img" />
      <img src={imgCSS} alt="" className="img" />
      <img src={imgJavaScript} alt="" className="img" /> */}
      <img src={img} alt="" className="img" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <button className="btn">Register</button>
    </div>
  );
};

export default Card;
