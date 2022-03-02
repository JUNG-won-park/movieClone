import React, {useEffect} from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {logout} from '../redux/userRedux.js';

const Container = styled.div`
  height: 80px;
  background-color: rgb(34,34,34);
  color: rgb(244,244,244);
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  align-items: center;
  font-size: 18px;
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

// const Logo = styled.h1`
//   padding-bottom: 25px;
//   ${mobile({ fontSize: "24px" })}
// `;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`; 

const But = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;


 
const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
 
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout()) 
  }
  
  const quantity = useSelector(state=>state.cart.quantity)
  console.log(quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
          루커용테스트페이지</Link>    
           
        </Left>
        <Center>
        </Center>
        <Right>
          {/* <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem>회원가입</MenuItem></Link> */}
          {
            !user ? (
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}><MenuItem>로그인</MenuItem></Link>
            ) : (
              <But onClick={handleLogout}>로그아웃</But>
            )
          }
         
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
