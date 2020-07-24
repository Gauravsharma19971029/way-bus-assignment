import React from "react";
import "./cards.component.css"

function Cards(props) {

  return (
    <div className="card-container">
      <h1  >{props.user.name}</h1>
    </div>);
};

export default Cards;
