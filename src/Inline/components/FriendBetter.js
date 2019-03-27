import React from "react";

const styles = {
  friend:{display:'flex'},
  image:{width:'auto', height:200},
  name:{fontSize:'1.2em'},
 description: {fontFamily:'Lato', fontSize:'1em'},
};

const Friend = props => (
  <div style={styles.friend}>
    <img style={styles.image}  href={props.imagePath} />
    <div>
      <h2 style={styles.name}>{props.name}</h2>
      <p style={styles.description}>{props.description}</p>
    </div>
  </div>
);

export default Friend;
