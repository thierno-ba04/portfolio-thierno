import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import imgprogramation from "./assets/img/imgprogrammation tech.jpg";
import imgmaintrnance from "./assets/img/labo-1024x461.jpg";
import imgcameras from "./assets/img/camera-surveillance-exterieur-1024x575.jpg"
import monimg from "./assets/img/monimg.jpg"



const Portfolio = () => {
  const phoneNumber = "221770799748"; // Remplacez ce numéro par le vôtre au format international
  const linkedinProfileUrl = "https://www.linkedin.com/feed/?trk=404_page"; // Remplacez par l'URL de votre profil LinkedIn
  const instagramProfileUrl = "https://www.instagram.com/"; // Remplacez par l'URL de votre profil Instagram

  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-dark fixed-top"
        style={{ color: "white" }}
      >
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-5 fs-5">
              <Nav.Link href="#home" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#CaseStudies" style={{ color: "white" }}>
                Case Studies
              </Nav.Link>
              <Nav.Link href="#Testimonials" style={{ color: "white" }}>
                Testimonials
              </Nav.Link>
              <Nav.Link href="# Recent work" style={{ color: "white" }}>
                Recent work
              </Nav.Link>
              <Nav.Link href="# Get In Touch" style={{ color: "white" }}>
                Get In Touch
              </Nav.Link>
            </Nav>
            <div className="d-flex gap-5 fs-5">
              <div>
                <a
                  href={linkedinProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div>
                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </div>
              <div>
                <a
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* // fin-----------------------navbar-------------------- */}
      {/* ------------section home */}
      <section
        className="#home bg-dark"
        style={{
          marginTop: "50px",
          color: "white",
          paddingTop: "210px",
          height: "100%",
        }}
      >
        <Container>
          <Row>
            <Col lg={6} md={12}>
              <h1 className="fw-bold">Thierno Mamadou Ba</h1>
              <p className="fs-5 mt-5">
                
                je suis technicien en maintenance informatique et développeur
                web. Avec plusieurs années d'expérience dans le domaine de
                l'informatique, je combine des compétences techniques solides
                avec une passion pour le développement web. Mon objectif est de
                fournir des solutions technologiques efficaces et innovantes qui
                répondent aux besoins de mes clients.
              </p>
              <button className="btnparti">Commençons</button>
            </Col>
            <Col lg={6} md={12}>
              <img src={monimg} alt="" style={{width:"80%", height:"70%" ,borderRadius:"50%"}} className="ms-5"/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* // fin-----------------------HOME-------------------- */}




      {/*------------section case etude----------- */}
      <section id="CaseStudies">
        <Container fluid>
          <h1 className="text-center mt-5">Case Studies</h1>
          <Row>
            <Col lg={6} md={12} className="fs-5 mt-5">
            <h1 className="mt-5">Développement Web</h1>
           <p className="mt-5"> Au cours de mes études en développement web, j'ai acquis une solide maîtrise des technologies front-end et back-end. J'ai appris à créer des sites web responsives et dynamiques en utilisant des langages de programmation comme  JavaScript, le HTML comme langue de balise, et le CSS comme langue de style. J'ai également exploré divers frameworks et bibliothèques tels que Bootstrap et Reactjs pour le développement d'applications web interactives.</p>
            <button className="mt-5" style={{background:"orange", color:"white", border:"none", height:"40px"}}>Voir l'étude de cas</button>
            </Col>
            <Col lg={6} md={12} className="mt-5">
                <img src={imgprogramation} alt="" style={{width:"100%"}}/>
            </Col>
          </Row>
          <Row className="mt-5" >
            <Col  className="mt-5" lg={6} md={12}>
            <img src={imgmaintrnance} alt="" style={{width:"100%"}}/>
            </Col>
            <Col lg={6} md={12} className="mt-5">
            <h1 className="mt-5">Maintenance Informatique </h1>
            <p className="mt-5 fs-5">En tant que technicien en maintenance informatique, j'ai développé des compétences approfondies dans le diagnostic et la résolution de problèmes matériels et logiciels. Mes études m'ont permis de comprendre les composants internes des ordinateurs, la gestion des systèmes d'exploitation, et la résolution des pannes courantes. J'ai appris à installer, configurer et maintenir des réseaux informatiques, assurant ainsi la sécurité et la performance des systèmes.</p>        
            <button className="mt-5" style={{background:"blue", color:"white", border:"none", height:"50px", width:"20%"}}>Voir l'étude de cas</button>
            </Col>
          </Row>
          <Row className="mt-5" >
          <Col lg={6} md={12} className="mt-5">
            <h1 className="mt-5">Réseau de Caméras de Surveillance</h1>       
            <p className="mt-5 fs-5">Mes connaissances en réseau de caméras de surveillance incluent l'installation, la configuration et la maintenance des systèmes de vidéosurveillance. J'ai étudié les différentes technologies de caméras IP et analogiques, ainsi que les méthodes de stockage et d'analyse des données vidéo. Je suis capable de concevoir des réseaux de surveillance efficaces, garantissant une couverture complète et une surveillance en temps réel.</p>        
            <button className="mt-5" style={{background:"rgb(68, 128, 7)", color:"white", border:"none", height:"50px", width:"20%"}}>Voir l'étude de cas</button>
            </Col>
            <Col  className="mt-5" lg={6} md={12}>
            <img src={imgcameras} alt="" style={{width:"100%"}}/>
            </Col>
          </Row>
        </Container>
      </section>
      {/*------------ fin section case etude----------- */}


      {/*-------- section testimonials------ */}
        <section id="Testimonials">
            <Container>
                <h1 className="text-center mt-5" >Temoignage</h1>
                <h2 className="text-center mt-5">Voici quelques temoignage des clients</h2>
                <Row className="mt-5">
                    <Col lg={6} md={12}>
                    <div>
                        <p className="fs-5">Je tiens à exprimer ma gratitude envers Thierno mamadou <br /> pour sont excellent service de maintenance informatique. <br /> En tant que petite entreprise, nous avons souvent été confrontés à des problèmes  techniques qui affectaient notre productivité.</p>
                    </div>
                    </Col>
                    <Col lg={6} md={12}>
                    <div>
                      <p className="fs-5 ms-5">Le système de surveillance qu'ils ont mis en place est de haute qualité, offrant une couverture complète et des images claires en temps réel. Nous avons maintenant une tranquillité d'esprit totale, sachant que notre magasin est sécurisé 24 heures sur 24, 7 jours sur 7.</p>
                    </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={6} md={12}>
                    <div>
                      <p className="fs-5">"Je souhaite exprimer ma plus grande satisfaction envers [Votre Nom ou Nom de votre entreprise] pour le développement exceptionnel de notre site web. En tant qu'entreprise en pleine croissance, il était essentiel pour nous d'avoir une présence en ligne professionnelle et attrayante.</p>
                    </div>
                    </Col>
                    <Col lg={6} md={12}>
                    <div>
                        <p className="fs-5 ms-5">Son professionnalisme et son expertise ont été remarquables. Non seulement ils a résolu nos problèmes de manière efficace, mais il a également fourni des conseils précieux pour améliorer notre infrastructure informatique et éviter des problèmes futurs.</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>

      {/*-------- section testimonials------ */}
    </div>
  );
};

export default Portfolio;
