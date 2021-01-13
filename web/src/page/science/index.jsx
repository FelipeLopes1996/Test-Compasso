import React from "react";
import Card from "./componets/card";
import { Container, WrapTitle, Title } from "./style";

class Sience extends React.Component {
  render() {
    return (
      <Container>
        <WrapTitle>
          <Title>choose your Technology news</Title>
        </WrapTitle>
        <Card />
      </Container>
    );
  }
}

export default Sience;
