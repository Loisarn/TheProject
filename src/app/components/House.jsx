import React, { useContext } from "react";
import "../app.css";
import BostadList from "../../api/BostadList.js";
import { useNavigate } from "react-router";
import { ThemeContext } from "../App";

export default function House() {
  const navigate = useNavigate();
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "0.5rem",
    margin: "0.5rem",
  };
  return (
    <>
      <div style={themeStyles}>
        <BostadList navigate={navigate} />
      </div>
    </>
  );
}
