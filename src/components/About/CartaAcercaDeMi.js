import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="green">Joaquín Canepa</span> de{" "}
            <span className="green">Buenos Aires, Argentina</span>.
            <br />
            Actualmente estoy estudiando la Tecnicatura en Programación en la UTN y me apasiona el mundo del desarrollo web y las soluciones IT.
            <br />
            Me considero una persona extrovertida, con facilidad para adaptarme a distintos entornos, que disfruta trabajar en equipo y siempre con ganas de seguir aprendiendo.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
