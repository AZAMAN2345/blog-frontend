import { useState } from "react";
import "./clickme.css";
const Counter = () => {
  const [name, setName] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <p>Name: {name}</p>

      <div className="diveditor"></div>
    </>
  );
};

export default Counter;
