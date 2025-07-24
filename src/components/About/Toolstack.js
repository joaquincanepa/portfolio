import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiTrello,
  SiXampp,
  SiMiro,
  SiCanva
} from "react-icons/si";

const renderIconWithTooltip = (icon, label) => (
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id={`tooltip-${label}`}>{label}</Tooltip>}
  >
    <Col xs={4} md={2} className="tech-icons">
      {icon}
    </Col>
  </OverlayTrigger>
);

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {renderIconWithTooltip(<SiVisualstudiocode />, "Visual Studio Code")}
      {renderIconWithTooltip(<SiPostman />, "Postman")}
      {renderIconWithTooltip(<SiTrello />, "Trello")}
      {renderIconWithTooltip(<SiXampp />, "XAMPP")}
      {renderIconWithTooltip(<SiMiro />, "Miro")}
      {renderIconWithTooltip(<SiCanva />, "Canva")}
    </Row>
  );
}

export default Toolstack;
