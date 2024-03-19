import React from "react";
import styled from "styled-components";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { mobile } from "../responsive";
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favourite products</Desc>
      <Inputcontainer>
        <Input placeholder="Your email"></Input>
        <Button>
          <SendOutlinedIcon />
        </Button>
      </Inputcontainer>
    </Container>
  );
};

export default Newsletter;

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;
const Inputcontainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
