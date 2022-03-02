 import { useState } from "react";
import styled from "styled-components"; 
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%; 
  height: 80vh;
  display: flex;
  position: relative;  
  ${mobile({ display: "none" })}
`;

const Contents = styled.div`
width: 100%; 
height: 100%;
margin-top: 10px;
background-color: rgb(244,244,244);
`;

const Menu = styled.ul`
width: 10%; 
height: 100%; 
list-style: none; 
padding-left: 0px;
padding-top: 1%;
`; 

const MenuItem = styled.li`
margin-top: 20px;
font-size: 20px;
text-align: center; 
`; 
 
const SLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover {
        text-decoration: none;
        color: rgb(124,124,124);
    }
`;

const Dashboard = () => {
  
  return (
    <Container>
        <Menu> 
          <MenuItem><SLink to="/">메뉴 1</SLink></MenuItem>
          <MenuItem><SLink to="/">메뉴 2</SLink></MenuItem>
          <MenuItem><SLink to="/">메뉴 3</SLink></MenuItem>
          <MenuItem><SLink to="/">메뉴 4</SLink></MenuItem>
          <MenuItem><SLink to="/">메뉴 5</SLink></MenuItem>
        </Menu>
        
      <Contents>
      <div>memo :</div> 
      <div>
        src, db링크 바꿀것, db적재
      </div> 
      
      <iframe src="https://instance_name.looker.com/embed/dashboards/1" width="100%" height="100%" frameborder="0" z-index="0"> </iframe>
      </Contents>
      
    </Container>
  );
};

export default Dashboard;
