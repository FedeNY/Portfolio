import React, { useState } from "react";
import { styled } from "styled-components";
import CardSkills from "./CardSkills";

const SkillsContainer = styled.section`
  height: auto;
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px 0px;
  flex-wrap: wrap-reverse;

  article {
    flex: 1 1 60%;
    display: flex;
    flex-wrap: wrap;

    > div {
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;

      .container {
        padding: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        gap: 10px;
      }

      div {flex: 1 1 50%; 
      
        :hover { 
          background-color: #ececec;

        }
      
      }
    }
  }

  .displayStyle {
    height: 50%;
    flex: 1 1 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    div {
      gap: 20px;
      height: 100%;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
  
    h4 {
      text-align: center;
    }
    .displayStyle {
 
      flex: 1 1 100%;
      margin-bottom: 100px;
    }
  }
`;

const skillsData = [
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

const Skills = () => {
  const filterSkillsByType = (type) => {
    return skillsData.filter((skill) => skill.type === type);
  };

  const basicSkills = filterSkillsByType("Basica");
  const frameworkSkills = filterSkillsByType("Framework");
  const designSkills = filterSkillsByType("Desing");

  const [selectedSkill, setSelectedSkill] = useState("HTML5");

  const handleChangeSkill = (name) => {
    setSelectedSkill(name);
  };

  return (
    <SkillsContainer>
      <article>
        <div>
          <h4>Diseño</h4>
          <div className="container">
            {designSkills.map((skill, index) => (
              <CardSkills
                key={index}
                name={skill.name}
                icon={skill.icon}
                onClick={() => handleChangeSkill(skill.name)}
              />
            ))}
          </div>
        </div>
        <div>
          <h4>Framework</h4>
          <div className="container">
            {frameworkSkills.map((skill, index) => (
              <CardSkills
                key={index}
                name={skill.name}
                icon={skill.icon}
                onClick={() => handleChangeSkill(skill.name)}
              />
            ))}
          </div>
        </div>
        <div>
          <h4>Basicas</h4>
          <div className="container">
            {basicSkills.map((skill, index) => (
              <CardSkills
                key={index}
                name={skill.name}
                icon={skill.icon}
                onClick={() => handleChangeSkill(skill.name)}
              />
            ))}
          </div>
        </div>
      </article>
      <div className="displayStyle">
        <div>
          {skillsData.map((skill, index) =>
            skill.name === selectedSkill ? (
              <div key={index}>
                <img src={skill.icon} height={70} alt={skill.name} />
                <h2>{skill.name}</h2>
                <p>{skill.description}</p>
              </div>
            ) : null
          )}
        </div>
      </div>
    </SkillsContainer>
  );
};

export default Skills;

