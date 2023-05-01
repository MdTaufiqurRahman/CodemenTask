import React from "react";
import "./Button.css";

export const CommonButton = ({ text, type }) => {
  return (
    <div className={`button ${type === "Danger" ? "dangerBtn" : "generalBtn"}`} onClick={()=>{
      alert(`You clicked ${text}`);
    }}>
      <p>{text}</p>
    </div>
  );
};
