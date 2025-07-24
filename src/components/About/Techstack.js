import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiFirebase,
  DiMysql,
  DiPhp
} from "react-icons/di";
import { SiSalesforce } from "react-icons/si";

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

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {renderIconWithTooltip(<CgCPlusPlus />, "C++")}
      {renderIconWithTooltip(<DiJavascript1 />, "JavaScript")}
      {renderIconWithTooltip(<DiBootstrap />, "Bootstrap")}
      {renderIconWithTooltip(<DiNodejs />, "Node.js")}
      {renderIconWithTooltip(<DiReact />, "React")}
      {renderIconWithTooltip(<DiFirebase />, "Firebase")}
      {renderIconWithTooltip(<DiMysql />, "MySQL")}
      {renderIconWithTooltip(<DiCss3 />, "CSS3")}
      {renderIconWithTooltip(<DiHtml5 />, "HTML5")}
      {renderIconWithTooltip(<SiSalesforce />, "Salesforce")}
      {renderIconWithTooltip(<DiPhp />, "PHP")}
    </Row>
  );
}

export default Techstack;