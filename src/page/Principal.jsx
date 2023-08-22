import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Boton from "../components/Boton";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
const Principal = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroStyle = styled.section`
  height: auto;
  width: 50%;
  display: flex;
  padding: 40px 0px;
  justify-content: start;
  align-items: center;
  color: #303030;
  position: relative;

  article {
    width: 1000px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 27px;

    h1 {
    }

    h3 {
      color: #494949;
      .frontColor {
        color: #a981c2;
      }

      .desingColor {
        color: #d3c08f;
      }
    }
    p {
      color: #494949;
      font-weight: 600;
    }

    div {
      display: flex;
      gap: 15px;
    }
  }

  .Purple-svg {
    border-radius: 82px;
    border: 1px solid #000;
    background: #b98fd3;
    box-shadow: 0px 7px 0px 0px #494949;
    position: absolute;
    bottom: 10%;
    right: 5%;

    animation: 2s PurpleAnimation linear infinite;
  }

  @keyframes PurpleAnimation {
    0% {
      transform: translateY(0%);
    }

    25% {
      transform: translateY(-2%);
    }

    75% {
      transform: translateY(2%);
    }

    100% {
      transform: translateY(0%);
    }
  }

  .Yellow-svg {
    max-height: 82px;
    border-radius: 82px;
    border: 1px solid #000;
    background: #d3c08f;
    box-shadow: 0px 5px 0px 0px #494949;
    position: absolute;
    top: 10%;
    left: 5%;
    animation: 2s YellowAnimation linear infinite;
  }

  @keyframes YellowAnimation {
    0% {
      transform: translateY(0%);
    }

    25% {
      transform: translateY(2%);
    }

    75% {
      transform: translateY(-2%);
    }

    100% {
      transform: translateY(0%);
    }
  }

  @media (max-width: 992px) {
    justify-content: center;
    text-align: center;
    width: 80%;

    p {
      text-align: start;
    }

    div {
      display: flex;
      justify-content: center;
      gap: 15px;
    }
  }
`;

export default function main() {
  const [date, setDate] = useState([]);
  useEffect(() => {
    const getFetch = async () => {
      try {
        const res = await fetch("/src/json/skills.json");
        const result = await res.json();
        setDate(result.personas);
      } catch (error) {
        console.error("se ha producido un error");
      }
    };

    getFetch();
  }, []);

  const sendID = (id) => {
    localStorage.setItem("id", id);
  };

  return (
    <Principal>
      <IntroStyle>
        <article>
          <h1>Federico Massolo</h1>
          <h3>
            <span className="frontColor">FrontEnd</span> /{" "}
            <span className="desingColor">Diseñador UI/UX</span>
          </h3>{" "}
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer
          </p>{" "}
          <div>
            <Boton
              text={"Linkedin"}
              bgcolor={"#a981c2"}
              color={"#ffffff"}
              icon={"/iconLinkedin.svg"}
              link={"https://www.linkedin.com/in/federico-massolo-55a13b238/"}
            />
            <Boton
              text={"Curriculum"}
              bgcolor={"#ffffff"}
              color={"#494949"}
              icon={"/iconCV.svg"}
            />
          </div>
        </article>
        {/* <svg
          className="Purple-svg"
          width="164"
          height="164"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="82"
            cy="82"
            r="82"
            fill="#B98FD3"
            stroke="#000"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="Yellow-svg"
          width="82"
          height="82"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="41"
            cy="41"
            r="41"
            fill="#D3C08F"
            stroke="#000"
            strokeWidth="1"
          />
        </svg> */}
      </IntroStyle>
     
      <Skills />

      <Contact /> 

      <div>
        {date.map((e, i) => (
          <Link to={"/detail"} onClick={() => sendID(e.name)} key={i}>
            {e.name}
          </Link>
        ))}
      </div>
    </Principal>
  );
}
