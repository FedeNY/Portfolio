import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const MainStyle = styled.main`
  height: 100vh;
  width: 100%;
  background: url(${(props) => props.bgcolor});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 0px;
`;

export default function DetailProyect() {
  const id = localStorage.getItem("id");
  const [data, setData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false); // Nuevo estado para indicar si los datos están cargados

  useEffect(() => {
    const getFetch = async () => {
      try {
        const res = await fetch("/src/json/skills.json");
        const result = await res.json();
        setData(result.personas);
        setDataLoaded(true); // Marcar los datos como cargados cuando la solicitud es exitosa
      } catch (error) {
        console.error("se ha producido un error");
      }
    };

    getFetch();
  }, []);

  const infProyect = data.find((e) => e.name === id);

  return (
    <MainStyle bgcolor={infProyect ? infProyect.color : null}>
      {dataLoaded ? (
        infProyect ? (
          <article>
            {infProyect.tecnologia.map((e) => (
              <div>{e.name}</div>
            ))}
          </article>
        ) : (
          <p>No se encontró el proyecto</p>
        )
      ) : (
        <p>Cargando...</p>
      )}
    </MainStyle>
  );
}
