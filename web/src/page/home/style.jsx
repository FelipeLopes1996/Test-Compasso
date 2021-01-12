import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  padding-right: 1rem;
  margin-top: 13rem;
  width: 25.5%;
`;

export const Link = styled(RouterLink)`
  display: flex;
  padding: 0.8rem;
`;

export const Title = styled.h2`
  display: flex;
  margin-top: 13rem;
  color: #727272;
  
  &:hover {
    color: #797777;
  }
`