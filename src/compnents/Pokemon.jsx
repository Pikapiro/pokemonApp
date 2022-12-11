import React from "react";
import "./pk.css";

export default function Pokemon(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <p>name of the pokemon:{props.name}</p>
      <p>type:{props.type}</p>
      <p>height:{props.height}</p>
      <p>weight:{props.weight}</p>

      <img src={props.pic} alt="" className="pk" />
    </div>
  );
}
