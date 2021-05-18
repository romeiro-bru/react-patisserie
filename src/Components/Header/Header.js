import React from "react";
import atom from "./atom.svg";
import "./style.css";

export function Header() {
  return (
    <>
      <h1>
        30 days of React
        <img src={atom} alt="react" />
      </h1>
      <h3>Day 9</h3>
    </>
  );
}