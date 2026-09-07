import { useState } from "react";
import "./add.css";

const ADD = () => {
  const [color, setColor] = useState("");
  return (
    <>
      <div className={color}></div>
      <p>{color}</p>
      <input
        type="text"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
    </>
  );
};
export default ADD;
