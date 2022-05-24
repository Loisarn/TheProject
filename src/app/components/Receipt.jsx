import React, { useContext } from "react";
import "../app.css";
import { useNavigate } from "react-router";
import ReceiptList from "../../api/ReceiptList";
import { ThemeContext } from "../App";

export default function Receipt() {
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
        <ReceiptList navigate={navigate} />
      </div>
    </>
  );
}
