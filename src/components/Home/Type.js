import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Estudiante",
          "Desarrollador Junior en búsqueda de oportunidades",
          "Técnico en Programación en formación",
          "Developer en formación",
          "autodidacta",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}
export default Type;
