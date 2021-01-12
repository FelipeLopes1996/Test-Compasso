import React from "react";

import { Navbar } from "react-bootstrap";

import { Container } from "./style";

const Head = () => {
  return (
    <Container>
      <Navbar style={{backgroundColor: "#4d4c4c", borderBottom: "solid 0.1rem #ccc" }}>
        <Navbar.Brand style={{ color: "#c0b9b9"}} href="/">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Head;
