import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyle = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  padding: 0px 40px;
  position: fixed;
  top: 0;
  z-index: 33;
  /* background-color: #ffffffb3;
  backdrop-filter: blur(20px); */

  

  nav {
    height: 100%;
    width: 40%;
    align-items: center;
    ul {
      height:100%;
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items:center;

      li {
        font-weight: 600;
        font-size: 19px;
        a {
          color: #494949;
          text-decoration: none;
          :visited {
            color: red;
          }
        }
      }
    }
  }

  .Menu {
    width: 100%;
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0px;
    height: auto;
    position: sticky;
    nav {
      width: 100%;
      transition: height 500ms ease-in-out;
      ul {
        width: 100%;
        padding-bottom: 10px;
        gap: 10px;
        padding-left: 40px;
        justify-content: start;
        flex-direction: column;
        align-items:start;
        
      }
    }

    .Menu {
      display: flex;
      justify-content: end;
      padding: 15px;

      .botonMenu {
        border-radius: 5px;

        border: none;
        background-color: trasparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        cursor: pointer;

        .line {
          width: 30px;
          height: 4px;
          background-color: #333;
          margin: 3px 0;
        }
      }
    }

    .mostrar {
      display: flex;
     

        
      }
   

    .ocultar {
      display: none;
    }
  }
`;

export default function Header() {
  const [menu, setMenu] = useState(false);

  function display(valor) {
    setMenu(valor);
  }

  return (
    <HeaderStyle>
      {" "}
      <div className="Menu">
        <button
          className="botonMenu"
          onClick={() => display(!menu)}
          type="button"
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <nav className={menu === true ? "mostrar" : "ocultar"}>
        <ul>
          <li>
            <Link to={"/"}>inicio</Link>
          </li>
          <li>habilidades</li>
          <li>proyectos</li>
          <li>contacto</li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}
