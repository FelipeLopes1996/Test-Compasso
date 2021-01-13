import React from "react";
import Card from './componets/card'

import {  Container, WrapTitle, Title } from "./style";

const Tech = () => {
  return (
    <Container>
        <WrapTitle>
          <Title>choose your Technology news</Title>
        </WrapTitle>
      <Card />
    </Container>
  );
};

export default Tech;
