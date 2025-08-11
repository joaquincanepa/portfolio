import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";

// Importa tus certificados
import cert1 from "../../Assets/CertificadoJS.png";
import cert2 from "../../Assets/CertificadoDesarrolloWEB.png";
import cert3 from "../../Assets/CertificadoSalesforce.jpeg";

function Certificates() {
  const certificates = [
    {
      img: cert1,
      title: "Certificado JavaScript",
      description: "Adquirí los fundamentos del lenguaje JavaScript y su aplicación práctica mediante el desarrollo de proyectos, fortaleciendo mi lógica de programación. El curso tuvo una duración de 9 semanas (34 horas) en las que cumplí con todos los requisitos y superé cada etapa de evaluación."
    },
        {
      img: cert3,
      title: "Certificado Salesforce Administrator",
      description: "Capacitación orientada al desarrollo profesional, fortaleciendo habilidades blandas clave como el trabajo en equipo, la organización del tiempo, el compromiso y la resiliencia frente a desafíos laborales. El curso tuvo una duración de 266 horas, en donde pude cumplir todos los requisitos y superando todas las etapas de evaluación."
    },
    {
      img: cert2,
      title: "Certificado Desarrollo WEB",
      description: "Formación en HTML y CSS, con enfoque en diseño responsive, accesibilidad y experiencia de usuario, aplicados en proyectos prácticos. El curso de Desarrollo Web tuvo una duración de 11 semanas (45 horas), donde logré superar todas las evaluaciones y obtener un lugar en el Top 10 de participantes."
    },

  ];

  return (
    <div className="page-content">
        <Container fluid className="resume-section">
        <Particle />
        <h1 className="project-heading">
            <strong className="purple">Certificados</strong>
        </h1>
        <p style={{ color: "white" }}>
            Algunos de los certificados que he obtenido durante mi formación y carrera profesional.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {certificates.map((cert, index) => (
            <Col md={4} className="mb-4" key={index}>
                <Card className="project-card-view" style={{ backgroundColor: "#1f1f1f", border: "none" }}>
                <Card.Img
                    variant="top"
                    src={cert.img}
                    className="img-fluid"
                    style={{ objectFit: "cover", height: "auto" }}
                />
                <Card.Body>
                    <Card.Title style={{ color: "#1ca113ff" }}>{cert.title}</Card.Title>
                    <Card.Text style={{ color: "white" }}>
                    {cert.description}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
        </Container>
    </div>
    
  );
}

export default Certificates;
