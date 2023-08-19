import React, { useState } from "react";
import { styled } from "styled-components";
import CardSkills from "./CardSkills";

const SkillsStyle = styled.section`
  width: 60vw;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0px 0px 0px;
  flex-wrap: wrap-reverse;
  article {
    flex: 1 1 50%;
    display: flex;
    flex-wrap: wrap;

    background-color: green;

    div {
      flex: 1 0 50%;
      padding: 0.2rem;
      display: flex;
      flex-direction: column;

      .container {
        padding: 2rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: start;
      }
    }
  }

  .displayStyle {
    flex: 1 1 20%;
    background-color: grey;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export default function Skills() {
  const arr = [
    {
      name: "HTML5",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
      type: "Basica",
      icon: "/skills_icons/html.svg",
    },
    {
      name: "CSS3",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
      type: "Basica",
      icon: "/skills_icons/css.svg",
    },
    {
      name: "Sass",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
      type: "Basica",
      icon: "/skills_icons/sass.svg",
    },
    {
      name: "JavaScript",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
      type: "Basica",
      icon: "/skills_icons/css.svg",
    },
    {
      name: "Bootstrap",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
      type: "Framework",
      icon: "/skills_icons/bootstrap.svg",
    },
    {
      name: "React",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
      type: "Framework",
      icon: "/skills_icons/react.svg",
    },

    {
      name: "Figma",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
      type: "Desing",
      icon: "/skills_icons/figma.svg",
    },
    {
      name: "Photoshop",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.",
      type: "Desing",
      icon: "/skills_icons/photoshop.svg",
    },
  ];

  const filtro = (word) => {
    const result = arr.filter((e) => e.type === word);

    return result;
  };

  const basica = filtro("Basica");
  const framework = filtro("Framework");
  const desing = filtro("Desing");

  const [skills, skillSet] = useState("HTML5");

  const change = (name) => {
    skillSet(name);
  };

  return (
    <SkillsStyle>
      <article>
        <div>
          <h4>Basicas</h4>

          <div className="container">
            {basica.map((e, i) => (
              <CardSkills
                key={i}
                name={e.name}
                icon={e.icon}
                onClick={() => change(e.name)}
              />
            ))}
          </div>
        </div>
        <div>
          <h4>Diseño</h4>
          <div className="container">
            {desing.map((e, i) => (
              <CardSkills
                key={i}
                name={e.name}
                icon={e.icon}
                onClick={() => change(e.name)}
              />
            ))}
          </div>{" "}
        </div>
        <div>
          <h4>Framework</h4>

          <div className="container">
            {framework.map((e, i) => (
              <CardSkills
                key={i}
                name={e.name}
                icon={e.icon}
                onClick={() => change(e.name)}
              />
            ))}
          </div>
        </div>
      </article>
      <div className="displayStyle">
        {arr.map((e, i) =>
          e.name === skills ? (
            <div key={i}>
              <img src={e.icon} height={70} alt="" />
              <h2>{e.name}</h2>
              <p>{e.description}</p>
            </div>
          ) : null
        )}
      </div>
    </SkillsStyle>
  );
}
