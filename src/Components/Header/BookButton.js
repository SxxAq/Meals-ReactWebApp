import React from "react";
import Button from "react-bootstrap/Button";
import "./bookButton.css";

export default function BookButton() {
  return (
    <>
      <Button className="button" variant="danger">
        Book a Table
      </Button>{" "}
    </>
  );
}
