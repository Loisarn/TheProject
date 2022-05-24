import React, { useContext } from "react";
import { useNavigate } from "react-router";
import "../app.css";
import FordonList from "../../api/FordonList.jsx";
import { ThemeContext } from "../App";

export default function Car() {
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
        <FordonList navigate={navigate} />
      </div>
    </>
  );
}
