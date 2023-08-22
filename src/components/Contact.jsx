import React from "react";
import { styled } from "styled-components";
import Boton from "./Boton";

const ContactStyle = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  h4 {

    color: #303030;
    align-self: start;
  }
  p {

  }

  div {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    form {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      height: 300px;
      width: 90%;
      padding: 10px;

      .containerInput {
        width: 30%;

        div {
          position: relative;
          label {
            position: absolute;
            background-color: white;
            color: #303030;
            left: 9px;
            top: -8px;
            font-weight: 600;
          }
          input {
            border-radius: 7px;
            border: none;
            padding: 5px 8px;
            width: 100%;
            outline: none;
          }
        }
      }
    }
  }

  .containerMessage {
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    label {
      position: absolute;
      background-color: white;
      color: #303030;
      left: 9px;
      top: -8px;
      font-weight: 600;
    }

    textarea {
      padding: 8px;
      width: 100%;
      resize: none;
      outline: none;
    }

    button {
    }
  }

  @media (max-width: 992px) {
    padding: 50px 0px;
    width: 90%;

    h4 {
      text-align: center;
    }

    div {
      width: 100%;
      form {
        .containerInput {
          width: 100%;
        }

        .containerMessage {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default function Contact() {
  return (
    <ContactStyle>
      <div>
        <h4>Contacto</h4>
        <p>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          tech-tribe-Pal de texto. Lorem Ipsum ha sido el texto
        </p>
        <form>
          <div className="containerInput">
            <div>
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" name="name" required />
            </div>{" "}
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="containerMessage">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="6" required></textarea>
            <Boton type="submit" text={"Enviar"} />
          </div>
        </form>
      </div>
    </ContactStyle>
  );
}
