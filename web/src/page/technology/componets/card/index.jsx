import React, { useState, useEffect } from "react";
import { Cont, Container, A, Title, WraTitle } from "./style";
import { getNoticeTech } from "../../../../shared/service/service";
import Card from "react-bootstrap/Card";

const CardTech = () => {
  const [noticias, setNotice] = useState([]);

  const MethodNoticias = async () => {
    await getNoticeTech().then(setNotice);
  };

  useEffect(() => {
    MethodNoticias();
  }, []);

  return (
    <Container>
      <WraTitle>
        <Title>choose your Technology news</Title>
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

export default CardTech;
