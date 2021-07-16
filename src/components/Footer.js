import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Footer sisältö tänne
      </h1>
      <Container>
          <h2 style= {{ color: "blue",
                        textAlign: "center"
                        }}>Otsikko</h2>
        <Row>
            <FooterLink href="#">Testi01</FooterLink>
            <FooterLink href="#">Testi02</FooterLink>
            <FooterLink href="#">Testi03</FooterLink>
            <FooterLink href="#">Testi04</FooterLink>                  
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;