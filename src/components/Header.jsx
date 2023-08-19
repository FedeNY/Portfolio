import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0px 40px;
  position: fixed;
  top: 0;
  z-index: 33;
  background-color: #ffffffb3;
  backdrop-filter:blur(20px);
  
  nav {
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    ul {
      width: 100%;
      list-style: none;
      display: flex;
      justify-content: space-evenly;

      li {
        
        font-weight: 600;
        font-size: 19px;
        a {color: #494949;
            text-decoration:none;
            :visited {

                color:red;

            }
        }
      }
    }
  }

  .botonMenu {
    display: none;
  }

  @media (max-width: 768px) {
    .botonMenu {
      display: flex;
    }
    nav {border:none;
      ul {
        display: none;
      }
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <nav>
        <button className="botonMenu" type="button">
          Menu
        </button>
        <ul>
          <li><Link to={"/"}>inicio</Link></li>
          <li>habilidades</li>
          <li>proyectos</li>
          <li>contacto</li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}
