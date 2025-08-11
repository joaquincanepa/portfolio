import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartaProyecto from "./CartaProyectos";
import Particle from "../Particle";
import cerverceria from "../../Assets/Proyectos/cerveceria.png"
import salaDeJuegos from "../../Assets/Proyectos/salaDeJuegos.png";
import lineaDeProduccion from "../../Assets/Proyectos/LineaDeProduccion.png";
import Restaurante from "../../Assets/Proyectos/Restaurante.jpg";
import Artistas from "../../Assets/Proyectos/Artistas.jpg";
import Carrito from "../../Assets/Proyectos/CarritoDeCompras.jpg";
function Proyectos() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="green">Proyectos </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <CartaProyecto
              imgPath={cerverceria}
              isBlog={false}
              title="Cerverceria"
              description="Trabajo Final Académico: Desarrollo de una simulación de bar de cerveza artesanal.
                          El proyecto fue realizado utilizando HTML, CSS y JavaScript, respetando una paleta de colores definida y aplicando principios de diseño responsive para adaptarse correctamente a distintas resoluciones de pantalla.
                          Se implementó una funcionalidad de reserva de mesas, conectada a una base de datos no relacional, simulando el flujo de interacción entre el usuario y el sistema."
              ghLink="https://github.com/joaquincanepa/A332-1-grupo10-CerveceriaArtesanal"
              demoLink="https://cerveceriaartesanal.web.app/index.html"
            />
          </Col>
          <Col md={5} className="project-card">
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
          <Col md={5} className="project-card">
            <CartaProyecto
              imgPath={lineaDeProduccion}
              isBlog={false}
              title="Linea de Prodccion"
              description="Este proyecto es una aplicación de escritorio desarrollada en C# (.NET 6) que simula la gestión de múltiples líneas de producción para la fabricación skates y rollers.
              Cuenta con autenticación de usuarios y control de acceso por roles: Supervisor (gestión de stock, usuarios y producción) y Operario (fabricación según materiales disponibles).
              La aplicación permite registrar modelos personalizados, controlar inventario en tiempo real y descontar insumos automáticamente durante la producción.
              En su implementación se aplican conceptos clave de Programación Orientada a Objetos como herencia, polimorfismo, sobrecarga, enumerados, clases estáticas y manejo de colecciones.
              El sistema centraliza la lógica en una clase estática Sistema, integrando persistencia de datos, manejo de excepciones y serialización en distintos formatos."
              ghLink="https://github.com/joaquincanepa/laboratorio_2_Parcial/tree/main"
            />
          </Col>    
          <Col md={5} className="project-card">
          <CartaProyecto
            imgPath={Restaurante}
            isBlog={false}
            title="Sistema para Restaurante"
            description="Sistema de gestión para restaurantes — API REST en PHP (Slim 4)
            Aplicación backend para administrar productos, mesas y pedidos en un restaurante con control de acceso por roles.
            Dependiendo de estos (Socio, Mozo, Cocinero, Bartender, Cervecero, Cliente) podes administrar distintos registros.
            Permite crear pedidos (con fotos), asignar y llevar el flujo de preparación/entrega, gestionar usuarios y productos, exportar/importar usuarios vía CSV y recolectar encuestas de satisfacción.
            Autenticación con JWT y autorización por middlewares. Persistencia en MySQL y uso de Composer para dependencias (Slim, JWT, dotenv, FPDI).
            Ademas de todo esto utilice como manejo de endpoints y peticiones Xampp y Postman"
            ghLink="https://github.com/joaquincanepa/TP_Progra3_CanepaJoaquin/tree/main"
          />
          </Col>
          <Col md={5} className="project-card">
          <CartaProyecto
            imgPath={Carrito}
            isBlog={false}
            title="Carrito de Compras"
            description="Uno de mis primeros proyectos en el mundo IT: desarrollo de una aplicación web de carrito de compras utilizando HTML, CSS, JavaScript y Bootstrap. Este trabajo marcó el inicio de mi aprendizaje en desarrollo web, permitiéndome aplicar por primera vez conceptos como manipulación del DOM, diseño responsive y experiencia de usuario mejorada mediante SweetAlert. El proyecto incluyó la carga dinámica de productos, 
            gestión de un carrito interactivo y el uso de estilos personalizados, sentando las bases de mis habilidades actuales en programación."
            ghLink="https://github.com/joaquincanepa/EntregaProyectoFinalCanepaJoaquin"
            demoLink="https://entrega-proyecto-final-canepa-joaqu.vercel.app/"
          />
          </Col>
          <Col md={5} className="project-card">
          <CartaProyecto
            imgPath={Artistas}
            isBlog={false}
            title="Artistas"
            description="Este proyecto representa mi primera experiencia práctica en el mundo IT y marcó un antes y un después en mi camino como desarrollador. Se trata de una aplicación web sencilla, desarrollada principalmente con HTML, CSS y Bootstrap, tecnologías con las que adquirí una base Para mi futuro. Fue en este proyecto donde tuve mi primer contacto con el mundo IT, lo que me permitió comenzar a entender la lógica de programación y la interacción dinámica dentro de una página web.
            La aplicación simula ser un portal dedicado a acercar información sobre diversos artistas, ofreciendo a los usuarios una experiencia completa que incluye imágenes representativas, playlists, información sobre próximos eventos y otras novedades relacionadas. "
            ghLink="https://github.com/joaquincanepa/Artistas-canepa/tree/main"
            demoLink="https://artistas-canepa-git-main-joaquin-canepas-projects.vercel.app/index.html"
          />
          </Col>         
        </Row>
      </Container>
    </Container>
  );
}
export default Proyectos;
