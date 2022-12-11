import React, { useState } from "react";

export default function SearchPoke(props) {
  const [s, setS] = useState("");
  return (
    <div style={{ textAlign: "center" }}>
      <input
        type="text"
        onChange={(ele) => {
          setS(ele.target.value);
        }}
      />
      <button
        onClick={() => {
          props.get(s);
        }}
      >
        search
      </button>
    </div>
  );
}
