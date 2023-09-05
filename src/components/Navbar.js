import React from "react";
import "./Navbar.css";

// export const Navbar = () => {
//   return TicTacToeTitle("TIC-TAC-TOE");
// };

export const Navbar = ({text , handleDark,handlelight}) => {
  const coloredText = text.split("").map((char, index) => (
    <span
      key={index}
      style={{
        color: index % 2 === 0 ? "rgb(255, 70, 37)" : "rgb(44, 135, 255)",
      }}
    >
      {char}
    </span>
  ));

  return (
    <div className="navbar">
      <h1 className="centered">{coloredText}</h1>
      <span className="dark-btns">
        <button className="dark-btn" onClick={handleDark}> 🌑 </button>
        <button className="dark-btn" onClick={handlelight}> 🌞 </button>
      </span>
    </div>
  );
}
