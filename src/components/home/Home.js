import { Col, Container,  Row } from "react-bootstrap";
import monimg from "../../assets/img/thier3b.jpg";
import tofthier from "../../assets/img/tofthier1d.jpg";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import { useEffect, useState } from "react";







// saisi de text automatique
const TypingEffect = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(displayedText + text[index]);
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeoutId);
      }
    }, [index, text, displayedText, speed]);
  
    return <p className="fs-5 mt-5">{displayedText}</p>;
  };
  // fin saisi


   // le texte saisi et sa vitesse
   const text = "je suis technicien en maintenance informatique et développeur web. Avec plusieurs années d'expérience dans le domaine de l'informatique, je combine des compétences techniques solides avec une passion pour le développement web. Mon objectif est de fournir des solutions technologiques efficaces et innovantes qui répondent aux besoins de mes clients.";
   const typingSpeed = 50; // Vitesse de frappe en millisecondes
   
 // fin  le texte saisi et sa vitesse
 


const Home = () => {
    return ( 
        <div>
              {/* ------------section home */}
      <section
        className="home bg-dark" id="home"
        style={{
          marginTop: "50px",
          color: "white",
          paddingTop: "210px",
          height: "100%"
        }}
      >
        <Container>
          <Row>
            <Col lg={6} md={12} xs={12} className="text-thier">
              <h1 className="animate__animated animate__bounce fw-bold">
                Thierno Mamadou Ba
              </h1>

                    <TypingEffect text={text} speed={typingSpeed} />
              <button className="btnparti">Commençons</button>
            </Col>
            <Col className="d-flex justify-content=center align-items-center image-container" md={12} lg={6} xs={12}>
              <div className="m-auto">
              <img
                src={monimg}
                alt=""
                style={{ width: "70%", height: "40%", borderRadius: "60%" }}
                className="ms-5"
              />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* // fin-----------------------HOME-------------------- */}
        </div>
     );
}
 
export default Home;