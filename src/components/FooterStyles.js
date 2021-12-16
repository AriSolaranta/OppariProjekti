import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 5px 60px;
  background: black;
  position: relative;
  bottom: 0;
   
  @media (max-width: 1000px) {
    padding: 20px 10px;
  }
  `;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, 
  minmax(10em, 1fr));
  grid-gap: 5em;
  justify-content: center;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
    minmax(10em, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: green;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: red;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 20px;
  color: purple;
  margin-bottom: 20px;
  font-weight: bold;
`;