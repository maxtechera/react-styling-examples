import React from "react";

const Friend = props => (
  <div style={{display:'flex'}}>
    <img style={{width:'auto', height:200}} href={props.imagePath} />
    <div>
      <h2 style={{fontSize:'1.2em'}}>{props.name}</h2>
      <p style={{fontFamily:'Lato', fontSize:'1em'}}>{props.description}</p>
    </div>
  </div>
);

export default Friend;
