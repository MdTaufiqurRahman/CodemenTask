import React from "react";
import { dateTimeFormat } from "../../../function/DateTimeFormat";
import "./CardFooter.css";

export const CardFooter = ({ data }) => {
  return (
    <div className="cardFooter">Last updated: {dateTimeFormat(Date.now())}</div>
  );
};
