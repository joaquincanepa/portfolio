import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartaProyecto from "./CartaProyectos";
import Particle from "../Particle";
import cerverceria from "../../Assets/Proyectos/cerveceria.png"
import salaDeJuegos from "../../Assets/Proyectos/salaDeJuegos.png";

function Proyectos() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis ultimos <strong className="green">Proyectos </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CartaProyecto
              imgPath={cerverceria}
              isBlog={false}
              title="cerverceria"
              description="Trabajo Final Académico: Desarrollo de una simulación de bar de cerveza artesanal.
                          El proyecto fue realizado utilizando HTML, CSS y JavaScript, respetando una paleta de colores definida y aplicando principios de diseño responsive para adaptarse correctamente a distintas resoluciones de pantalla.
                          Se implementó una funcionalidad de reserva de mesas, conectada a una base de datos no relacional, simulando el flujo de interacción entre el usuario y el sistema."
              ghLink="https://github.com/joaquincanepa/A332-1-grupo10-CerveceriaArtesanal"
              demoLink="https://cerveceriaartesanal.web.app/index.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <CartaProyecto
              imgPath={salaDeJuegos}
              isBlog={false}
              title="Sala de Juegos"
              description="Este proyecto es una aplicación web desarrollada como trabajo final académico, que simula una plataforma de juegos con autenticación de usuarios, estadísticas y gestión por roles. 
              Está construida con Angular (HTML, SCSS y TypeScript) y utiliza Firebase Authentication y Firestore como base de datos NoSQL.
              La app permite a los usuarios registrarse, jugar y consultar sus propios resultados, mientras que los administradores acceden a estadísticas globales y funciones exclusivas como la gestión de encuestas. También incluye una sección de presentación del autor."
              ghLink="https://github.com/joaquincanepa/TpLabo4"
              demoLink="https://tplaboratorio4.web.app/home"
            />
          </Col>      
        </Row>
      </Container>
    </Container>
  );
}

export default Proyectos;
