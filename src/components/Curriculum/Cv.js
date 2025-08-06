import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import cv from "../../Assets/../Assets/CVCanepaJoaquin.pdf";
import cvIT from "../../Assets/../Assets/CVCanepaJoaquinIT.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [activeCv, setActiveCv] = useState(cv);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          {}
          <Button
            variant="primary"
            onClick={() => setActiveCv(cv)}
            style={{ maxWidth: "250px", marginRight: "10px", backgroundColor: activeCv === cv ? '#6f42c1' : '#343a40' }}
          >
            CV Común
          </Button>
          <Button
            variant="primary"
            onClick={() => setActiveCv(cvIT)}
            style={{ maxWidth: "250px", backgroundColor: activeCv === cvIT ? '#6f42c1' : '#343a40' }}
          >
            CV IT
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={activeCv}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={activeCv} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={activeCv}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;