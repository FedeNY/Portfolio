import React from "react";

import { styled } from "styled-components";

const CardStyle = styled.button`
  display: flex;
  flex-direction: column;
  color: #3d3d3d;
  border: none;
  align-items: center;
  cursor: pointer;
    padding:10px;
  flex: 1 1 auto;
  background-color:transparent;
  border-radius:8px;
  p {
    margin: 4px 0px 0px 0px;
  }

  img {
    height: 40px;
    width: 40px;
  }
`;

export default function CardSkills({ name, icon, onClick }) {
  return (
    <CardStyle onClick={onClick}>
      <img src={icon} alt={`icon_${name}`} />
      <p>{name}</p>
    </CardStyle>
  );
}
