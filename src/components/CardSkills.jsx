import React from "react";

import { styled } from "styled-components";

const CardStyle = styled.button`
  display: flex;
  flex-direction: column;
  color: #3d3d3d;
  border:none;
  align-items: center;
  background-color:transparent;
  cursor: pointer;
  padding: 8px 10px;

    p {
        margin: 7px 0px 0px 0px;
    }

  img {
    height: 40px;
  }

  :hover {
    color: black;
  }
`;

export default function CardSkills({ name, icon, onClick }) {
  console.log(icon);

  return (
    <CardStyle onClick={onClick}>
      <img src={icon} alt={`icon_${name}`} />
      <p>{name}</p>
    </CardStyle>
  );
}
