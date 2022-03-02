import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgb(255, 255, 255),
      rgb(255, 255, 255)
    );
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-top: 15px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>회원가입</Title>
        <Form>
          <Input placeholder="이름" />
          <Input placeholder="성" />
          <Input placeholder="아이디" />
          <Input placeholder="이메일" />
          <Input placeholder="비밀번호" />
          <Input placeholder="비밀번호확인" />
          
          <Button>확인</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
