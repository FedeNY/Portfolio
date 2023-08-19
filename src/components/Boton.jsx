import React from "react";
import { styled } from "styled-components";

const BotonStyle = styled.button`
  color: ${({ color }) => color};
  background-color: ${({ bgcolor }) => bgcolor};
  padding:10px 20px;
  font-weight:600;
  border-radius:20px;
  border:1px solid #494949 ;
  box-shadow: 0px 5px 0px 0px #494949;
  font-size:1.1rem;
    display:flex;
    align-items:center;
  
   

`;

export default function Boton({ text, color, bgcolor, icon }) {
  return (
    <BotonStyle  bgcolor={bgcolor} color={color}>
      {text}
    </BotonStyle>
  );
}
