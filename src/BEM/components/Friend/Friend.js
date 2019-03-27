import React from "react";
import "./Friend.css";

const Friend = props => (
  <div className="friend friend--best">
    <img className="friend__image" href={props.imagePath} />
    <div>
      <h2 className="friend__name">{props.name}</h2>
      <p className="friend__description">{props.description}</p>
    </div>
  </div>
);

export default Friend;
