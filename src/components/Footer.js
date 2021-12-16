import React from "react";
import {
  Box,
  Container,
  Row,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Heading>Linkit</Heading>
        <Row>
          <FooterLink target="_blank" href="https://www.mangakakalot.com">Mangakakalot</FooterLink>
          <FooterLink target="_blank" href="https://www.isekaiscan.com">Isekaiscan</FooterLink>
          <FooterLink target="_blank" href="https://1stkissmanga.io">1stkissmanga</FooterLink>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;