import React, { useState, useEffect } from "react";

import { Container, Cont, A, WraTitle, Title } from "./style";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/Card";

import { getNotice } from "../../../../shared/service/service";

const ModalScience = () => {
  const [noticias, setNotice] = useState([]);

  const MethodNoticias = async () => {
    await getNotice().then(setNotice);
  };

  useEffect(() => {
    MethodNoticias();
  }, []);

  return (
    <Container>
      <WraTitle>
        <Title>choose your science news</Title>
      </WraTitle>

      {noticias.map((notice, i) => (
        <Cont key={i}>
          <Card style={{ width: "30rem" }} border="success">
            <A href={notice.url}>
              <Card.Header>{notice.title}</Card.Header>
            </A>
            <Card.Body>{notice.abstract}</Card.Body>
          </Card>
        </Cont>
      ))}
    </Container>
  );
};

export default ModalScience;
