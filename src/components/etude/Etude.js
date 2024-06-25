import { Col, Container, Row } from "react-bootstrap";
import imgprogramation from "../../assets/img/imgprogrammation tech.jpg";
import imgmaintrnance from "../../assets/img/labo-1024x461.jpg";
import imgcameras from "../../assets/img/camera-surveillance-exterieur-1024x575.jpg";




const Etude = () => {
    return ( <div>
            {/*------------section case etude----------- */}
      <section id="CaseStudies">
        <Container fluid>
          <h1 className="text-center mt-5">Case Studies</h1>
          <Row>
            <Col lg={6} md={12} className="fs-5 mt-5">
              <h1 className="mt-5">Développement Web</h1>
              <p className="mt-5">
                
                Au cours de mes études en développement web, j'ai acquis une
                solide maîtrise des technologies front-end et back-end. J'ai
                appris à créer des sites web responsives et dynamiques en
                utilisant des langages de programmation comme JavaScript, le
                HTML comme langue de balise, et le CSS comme langue de style.
                J'ai également exploré divers frameworks et bibliothèques tels
                que Bootstrap et Reactjs pour le développement d'applications
                web interactives.
              </p>
              <button
                className="mt-5"
                style={{
                  background: "rgb(68, 14, 233)",
                  color: "white",
                  border: "none",
                  height: "40px",
                }}
              >
                Voir l'étude de cas
              </button>
            </Col>
            <Col lg={6} md={12} className="mt-5">
              <img src={imgprogramation} alt="" style={{ width: "100%" }} />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col className="mt-5" lg={6} md={12}>
              <img src={imgmaintrnance} alt="" style={{ width: "100%" }} />
            </Col>
            <Col lg={6} md={12} className="mt-5">
              <h1 className="mt-5">Maintenance Informatique </h1>
              <p className="fs-5">
                En tant que technicien en maintenance informatique, j'ai
                développé des compétences approfondies dans le diagnostic et la
                résolution de problèmes matériels et logiciels. Mes études m'ont
                permis de comprendre les composants internes des ordinateurs, la
                gestion des systèmes d'exploitation, et la résolution des pannes
                courantes. J'ai appris à installer, configurer et maintenir des
                réseaux informatiques, assurant ainsi la sécurité et la
                performance des systèmes.
              </p>
              <button
                className="mt-"
                style={{
                  background: "rgb(68, 14, 233)",
                  color: "white",
                  border: "none",
                  height: "50px",
                  width: "20%",
                }}
              >
                Voir l'étude de cas
              </button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col lg={6} md={12} className="mt-5">
              <h1 className="mt-5">Réseau de Caméras de Surveillance</h1>
              <p className="mt-5 fs-5">
                Mes connaissances en réseau de caméras de surveillance incluent
                l'installation, la configuration et la maintenance des systèmes
                de vidéosurveillance. J'ai étudié les différentes technologies
                de caméras IP et analogiques, ainsi que les méthodes de stockage
                et d'analyse des données vidéo. Je suis capable de concevoir des
                réseaux de surveillance efficaces, garantissant une couverture
                complète et une surveillance en temps réel.
              </p>
              <button
                className="mt-5"
                style={{
                  background: "rgb(68, 14, 233)",
                  color: "white",
                  border: "none",
                  height: "50px",
                  width: "20%",
                }}
              >
                Voir l'étude de cas
              </button>
            </Col>
            <Col className="mt-5" lg={6} md={12}>
              <img src={imgcameras} alt="" style={{ width: "100%" }} />
            </Col>
          </Row>
        </Container>
      </section>
      {/*------------ fin section case etude----------- */}
    </div> );
}
 
export default Etude;