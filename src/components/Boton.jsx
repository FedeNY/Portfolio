  import React from "react";
  import { styled } from "styled-components";

  const BotonStyle = styled.a`
    color: ${({ color }) => color};
    background-color: ${({ bgcolor }) => bgcolor};
    padding: 10px 20px;
    font-weight: 600;
    border-radius: 20px;
    border: 1px solid #494949;
    box-shadow: 0px 5px 0px 0px #494949;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    text-decoration:none;
    cursor:pointer;


    &:hover {transform:translateY(2%);box-shadow: 0px 3px 0px 0px #494949;}


    &:active{
      transform:translateY(4%);
      box-shadow: 0px 0px 0px 0px #494949;

    }
  
  `;

  export default function Boton({ text, color, bgcolor, icon, link }) {
    return (
      <BotonStyle bgcolor={bgcolor} color={color} href={link}>
        {text}
      </BotonStyle>
    );
  }
