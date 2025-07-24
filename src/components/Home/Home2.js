import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="green"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Me entusiasma desarrollarme profesionalmente en el ámbito{" "}
              <b className="green">IT</b>, donde pueda seguir aprendiendo y creciendo constantemente. 
              Me considero una persona <b className="green">extrovertida</b>, proactiva y con gran capacidad de adaptación a diferentes entornos y equipos de trabajo.
              <br />
              <br />
              Disfruto colaborar en proyectos donde se valore{" "}
              <i>
                <b className="green">el trabajo en equipo</b>
              </i>, la creatividad y la mejora continua.
              <br />
              <br />
              Manejo tecnologías como{" "}
              <i>
                <b className="green">HTML, CSS, JavaScript, C, C#, PHP y SQL</b>
              </i>.
              <br />
              <br />
              Además, poseo conocimiento en herramientas como{" "}
              <b className="green">Visual Studio, Trello, Postman y XAMPP</b>{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"
              style={{ maxHeight: "500px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCONTRAME EN</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/joaquincanepa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joaquin-canepa-9b275b2a3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/joaco_canepa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
            <p>
              No dudes en <span className="green">Contactarte </span>conmigo
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
