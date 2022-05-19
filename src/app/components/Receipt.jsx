import React from "react";
import "../app.css";
import { useNavigate } from "react-router";
import ReceiptList from "../../api/ReceiptList";

export default function Receipt() {
  const navigate = useNavigate();
  return (
    <>
      <ReceiptList navigate={navigate} />
    </>
  );
}
