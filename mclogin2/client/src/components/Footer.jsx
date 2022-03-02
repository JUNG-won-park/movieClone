
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  position: relative; 
  ${mobile({ flexDirection: "column" })}
`;

const Desc = styled.p`
  padding: 80px 0px;
`;

const Footer = () => {
  return (
    <Container>
     
        <Desc>This area is Footer. <br/>메가존 클라우드 테스트페이지
        </Desc>
        

    </Container>
  );
};

export default Footer;
