import React from "react";

import { Container, NavLink, Link, Title } from "./style";

import Button from "../../shared/components/button";

const Home = () => {
  return (
    <Container>
      <Title>choose your news</Title>
      <NavLink>
        <Button>
          <Link to="/science">Science</Link>
        </Button>
        </NavLink>
        <NavLink>
        <Button>
          <Link to="/technology">Technology</Link>
        </Button>
      </NavLink>
    </Container>
  );
};

export default Home;
