import styled from "styled-components";

export const Card = styled.div`
  display: inline-block;
  vertical-align: top;
  font-family: sans-serif;
  background-color: #3f3f3f;
  border: solid 0.01rem #707070;
  border-radius: 0.3rem;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);
  /* height: 270px; */
  width: 320px;
  margin: 10px 50px;
  padding: 1px;

  &:hover {
    background-color: #5a5a5a;
    color: #000;
  }
`;

export const Img = styled.img`
  width: 100%;
  max-height: 50%;
`;

export const CardTitle = styled.h5`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 20px;
  color: white;
  border-bottom: solid 0.01rem #696969;  
`

export const CardInfo = styled.h3`
  font-size: 1rem;
  font-weight: 100;
  padding: 5px;
  margin: 0px;
  color: white;
`
export const CardFooter = styled.div`
display: flex;
  bottom: 0;

`
