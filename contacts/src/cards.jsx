import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="cardDiv">
      <div className="topDiv">
        <p className="nameParagraph">{props.name} </p>
        <img className="circle-img" src={props.imgSource} alt="image of contact" />
      </div>

      <div className="bottomDiv">
        <p className="contactInfo">{props.phoneNumber}</p>
        <p className="contactInfo">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
