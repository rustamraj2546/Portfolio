import { useState } from "react";
import "./Catchme.css";

const Catchme = () => {
  const [boxPosition, setBoxPosition] = useState({ top: "40%", left: "40%" });

  const moveBox = () => {
    const randomTop = `${Math.floor(Math.random() * 80)}%`;
    const randomLeft = `${Math.floor(Math.random() * 85)}%`;
    setBoxPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="container bg-gray-700/20 rounded-2xl">
      <div
        id="catch-me"
        className="catch"
        onMouseEnter={moveBox}
        style={{ top: boxPosition.top, left: boxPosition.left }}
      >
        <p>Catch Me</p>
        <p>😊</p>
      </div>
    </div>
  );
};

export default Catchme;
