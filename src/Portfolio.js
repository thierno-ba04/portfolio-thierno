import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import imgprogramation from "./assets/img/imgprogrammation tech.jpg";
import imgmaintrnance from "./assets/img/labo-1024x461.jpg";
import imgcameras from "./assets/img/camera-surveillance-exterieur-1024x575.jpg";
import monimg from "./assets/img/thier3b.jpg";
import tofthier from "./assets/img/tofthier1d.jpg";
import "react-toastify/dist/ReactToastify.css";
// import myimg from "./assets/img/my_img-removebg-preview.png"
import imgram from "./assets/img/ramata.png";
import imglemaire from "./assets/img/lemaire.jpg";
import imgbass from "./assets/img/bass.jpg";
import imgvieux from "./assets/img/vieux.png";
import imgproject from "./assets/img/projettravail4.png";
import imgajou from "./assets/img/ajou1351.png";
import "animate.css";
import imgsign from "./assets/img/Capture d'écran 2024-06-11 164200.png";
import imgsigncop from "./assets/img/sign47.png";
import { useEffect, useState } from "react";

import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { fireDb } from "./firebase";




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









const Portfolio = () => {
  const phoneNumber = "221770799748"; // Remplacez ce numéro par le vôtre au format international
  const linkedinProfileUrl = "https://www.linkedin.com/feed/?trk=404_page"; // Remplacez par l'URL de votre profil LinkedIn
  const instagramProfileUrl = "https://www.instagram.com/"; // Remplacez par l'URL de votre profil Instagram

  // le texte saisi et sa vitesse
  const text = "je suis technicien en maintenance informatique et développeur web. Avec plusieurs années d'expérience dans le domaine de l'informatique, je combine des compétences techniques solides avec une passion pour le développement web. Mon objectif est de fournir des solutions technologiques efficaces et innovantes qui répondent aux besoins de mes clients.";
  const typingSpeed = 50; // Vitesse de frappe en millisecondes
  
// fin  le texte saisi et sa vitesse

const [val, setVal] = useState(""); // Définir l'état et la fonction de mise à jour

const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");

  const value = collection(fireDb, "User");

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  const handleCreateAndUpload = async () => {
    // verifier si les champs sont vide
    if (!email || !mobile || !message) {
      toast.error("champ requis");
      return;
    }
    // creation du dossier de stockage et la synchronisation de l'image ajoutée
    try {
      await addDoc(value, {
        email: email,
        mobile: mobile,
        message: message,
      });

      setemail("");
      setmobile("");
      setmessage("");

      toast.success("envoyer avec succès");
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };


  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-dark fixed-top"
        style={{ color: "white" }}
      >
        <Container>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-toggler"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-5 fs-5">
              <Nav.Link href="#home" style={{ color: "white" }}>
              Accueil
              </Nav.Link>
              <Nav.Link href="#CaseStudies" style={{ color: "white" }}>
              Études de cas
              </Nav.Link>
              <Nav.Link href="#Testimonials" style={{ color: "white" }}>
              Témoignages
              </Nav.Link>
              <Nav.Link href="#Recent work" style={{ color: "white" }}>
              Travaux récents
              </Nav.Link>
              <Nav.Link href="#GetInTouch" style={{ color: "white" }}>
              Contact
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
        className="home bg-dark" id="home"
        style={{
          marginTop: "50px",
          color: "white",
          paddingTop: "210px",
        }}
      >
        <Container>
          <Row>
            <Col lg={6} md={12} className="text-thier">
              <h1 className="animate__animated animate__bounce fw-bold">
                Thierno Mamadou Ba
              </h1>
              {/* <p className="fs-5 mt-5">
                je suis technicien en maintenance informatique et développeur
                web. Avec plusieurs années d'expérience dans le domaine de
                l'informatique, je combine des compétences techniques solides
                avec une passion pour le développement web. Mon objectif est de
                fournir des solutions technologiques efficaces et innovantes qui
                répondent aux besoins de mes clients.
              </p> */}
                    <TypingEffect text={text} speed={typingSpeed} />
              <button className="btnparti">Commençons</button>
            </Col>
            <Col className="image-container" lg={6} md={12}>
              <img
                src={monimg}
                alt=""
                style={{ width: "150%", height: "150%", borderRadius: "60%" }}
                className="image not-smiling ms-5"
              />
               <img
                src={tofthier}
                alt=""
                style={{  width: "150%", height: "150%", borderRadius: "60%" }}
                className="image smiling ms-5"
              />
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
              <p className="mt-5">
                {" "}
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

      {/*-------- section testimonials------ */}
      <section
        id="Testimonials"
        className="Testimonials bg-dark"
        style={{ color: "white" }}
      >
        <Container className="">
          <h1 className="text-center mt-5">Temoignage</h1>
          <h2 className="text-center mt-5">
            Voici quelques temoignage des clients
          </h2>
          <Row className="mt-5 gy-5">
            <Col lg={6} md={12}>
              <div
                style={{
                  position: "relative",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #bbb",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "40px",
                    transform: "translateX(-50%)",
                    padding: "5px",
                  }}
                >
                  <i className="fa-solid fa-quote-left" style={{ color: "#bbb", fontSize: 30 }}></i>
                </div>
                <div>
                  <p className="fs-5">
                    Je tiens à exprimer ma gratitude envers Thierno mamadou
                    <br /> pour son excellent service de maintenance
                    informatique. <br /> En tant que petite entreprise, nous
                    avons souvent été confrontés à des problèmes techniques qui
                    affectaient notre productivité.
                  </p>
                </div>
                <div
                  className="img-mere d-flex gap-4"
                  style={{
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <div>
                    <img
                      src={imgram}
                      alt=""
                      style={{
                        width: "130%",
                        height: "50px",
                        borderRadius: "50%",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                        border: "2px solid #bbb",
                      }}
                    />
                  </div>
                  <div>
                    <h4>Ramata</h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div
                style={{
                  position: "relative",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #bbb",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "40px",
                    transform: "translateX(-50%)",
                    padding: "5px",
                  }}
                >
                  <i className="fa-solid fa-quote-left" style={{ color: "#bbb", fontSize: 30 }}></i>
                  </div>
                <div>
                  <p className="fs-5 ms-5">
                    Le système de surveillance qu'ils ont mis en place est de
                    haute qualité, offrant une couverture complète et des images
                    claires en temps réel. Nous avons maintenant une
                    tranquillité d'esprit totale, sachant que notre magasin est
                    sécurisé 24 heures sur 24.
                  </p>
                </div>
                <div
                  className="img-mere d-flex gap-5 ms-5"
                  style={{
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <div>
                    <img
                      src={imglemaire}
                      alt=""
                      style={{
                        width: "220%",
                        height: "50px",
                        borderRadius: "50%",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                        border: "2px solid #bbb",
                      }}
                    />
                  </div>
                  <div>
                    <h4>Mouhamed</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 gy-5">
            <Col lg={6} md={12}>
              <div
                style={{
                  position: "relative",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #bbb",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "40px",
                    transform: "translateX(-50%)",
                    padding: "5px",
                  }}
                >
                  <i className="fa-solid fa-quote-left" style={{ color: "#bbb", fontSize: 30 }}></i>
                  </div>
                <div>
                  <p className="fs-5">
                    Je souhaite exprimer ma plus grande satisfaction envers
                    Thierno Mamadou Ba pour le développement exceptionnel de
                    notre site web. En tant qu'entreprise en pleine croissance,
                    il était essentiel pour nous d'avoir une présence en ligne
                    professionnelle et attrayante.
                  </p>
                </div>
                <div
                  className="img-mere d-flex gap-5 ms-5"
                  style={{
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <div>
                    <img
                      src={imgbass}
                      alt=""
                      style={{
                        width: "130%",
                        height: "50px",
                        borderRadius: "50%",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                        border: "2px solid #bbb",
                      }}
                    />
                  </div>
                  <div>
                    <h4>Bassirou</h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div
                style={{
                  position: "relative",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #bbb",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-15px",
                    left: "40px",
                    transform: "translateX(-50%)",
                    padding: "5px",
                  }}
                >
                  <i className="fa-solid fa-quote-left" style={{ color: "#bbb", fontSize: 30 }}></i>
                  </div>
                <div>
                  <p className="fs-5 ms-5">
                    Son professionnalisme et son expertise ont été remarquables.
                    Non seulement ils a résolu nos problèmes de manière
                    efficace, mais il a également fourni des conseils précieux
                    pour améliorer notre infrastructure informatique et éviter
                    des problèmes futurs.
                  </p>
                </div>
                <div
                  className="img-mere d-flex gap-5 ms-5"
                  style={{
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <div>
                    <img
                      src={imgvieux}
                      alt=""
                      style={{
                        width: "140%",
                        height: "50px",
                        borderRadius: "50%",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                        border: "2px solid #bbb",
                      }}
                    />
                  </div>
                  <div>
                    <h4>Birama Ndiaye</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*--------fin  section testimonials------ */}

      {/* section travails */}

      <section id="Recent work">
        <Container>
          <h1 className="text-center mt-5">Travaux récents</h1>
          <h4 className="text-center mt-5">
            Voici quelques projet que j' ai eu a developper
          </h4>
          <Row className="gy-1" style={{ marginTop: "150px" }}>
            <Col lg={6} md={12}>
              <img
                src={imgajou}
                alt=""
                style={{ height: "80%", height: "70%" }}
                className="ms-5"
              />
            </Col>
            <Col lg={6} md={12}>
              <img src={imgproject} alt="" style={{ width: "100%" }} />

              <p className="ms-5 fs-5">
                Description du Projet : <br />
                J'ai développé une application CRUD (Create, Read, Update,
                Delete) pour la gestion des étudiants, intégrant pour des
                fonctionnalités avancées telles que archives un etudiant(e) ou
                ajouté un etudiant ect... . Firebase a été utilisé comme backend
                pour le stockage et la gestion des données en temps réel.
              </p>
              <a href="https://crud-vert-six.vercel.app/" target="blank">
                <button className="ms-5">
                  <div>
                    <span>
                      <p>Voir le projet</p>
                    </span>
                  </div>
                  <div>
                    <span>
                      <p>Appuyer</p>
                    </span>
                  </div>
                </button>
              </a>
            </Col>
          </Row>

          <Row className="mt-5 gy-5">
            <Col lg={6} md={12}>
              <img src={imgsigncop} alt="" style={{ width: "50%" }} />
            </Col>
            <Col lg={6} md={12}>
              <img src={imgsign} alt="" style={{ width: "80%" }} />
              <p className="mt-5 fs-5">
                Projet : Système d'Authentification avec Firebase <br />
                Dans le cadre de mon développement professionnel, j'ai conçu et
                implémenté un système d'authentification robuste en utilisant
                Firebase. Ce système permet une gestion sécurisée des
                utilisateurs, offrant des fonctionnalités telles que
                l'inscription, la connexion, la réinitialisation de mot de passe
                et la vérification par e-mail. Firebase Authentication a été
                choisi pour sa simplicité d'intégration et ses capacités de
                gestion sécurisée des utilisateurs.
              </p>
              <a href="" target="blank">
                <button className="">
                  <div>
                    <span>
                      <p>Voir le projet</p>
                    </span>
                  </div>
                  <div>
                    <span>
                      <p>Appuyer</p>
                    </span>
                  </div>
                </button>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      {/* fin section travails */}

      {/* section get in touch */}
      <section id="GetInTouch" className="bg-dark">
        <Container>
          <h1 className="text-center mt-5" style={{color:"white"}}>Contact</h1>
          <p className="text-center mt-5 fs-5" style={{color:"white"}}>
            Je serais ravi d'avoir de vos nouvelles ! N'hésitez pas à me
            contacter pour toute question, <br /> suggestion ou demande
            d'information supplémentaire. Je suis là pour vous aider.
          </p>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="modals mt-5">
                <form class="form">
                  <div class="payment--options">
                    <button name="paypal" type="button" style={{width:"100%"}}>
                      <a
                        href={linkedinProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black" }}
                      >
                        <i
                          class="fa-brands fa-linkedin"
                          style={{
                            fontSize: "35px",
                            marginTop: "10px",
                            marginLeft: "45px",
                          }}
                        ></i>
                      </a>
                    </button>
                    <button name="apple-pay" type="button"  style={{width:"100%"}}>
                      <a
                        href={`https://wa.me/${phoneNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black" }}
                      >
                        <i
                          class="fa-brands fa-whatsapp"
                          style={{
                            fontSize: "35px",
                            marginTop: "10px",
                            marginLeft: "45px",
                          }}
                        ></i>
                      </a>
                    </button>
                    <button name="google-pay" type="button"  style={{width:"100%"}}>
                      <a
                        href={instagramProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black" }}
                      >
                        <i
                          class="fa-brands fa-instagram"
                          style={{
                            fontSize: "35px",
                            marginTop: "10px",
                            marginLeft: "45px",
                          }}
                        ></i>
                      </a>
                    </button>
                  </div>
                  <div class="separator">
                    <hr class="line" />
                    <p>Ou remplissez le formulaire ci-dessous.</p>
                    <hr class="line" />
                  </div>
                  <div class="credit-card-info--form">
                    <div class="input_container">
                      <label for="cardholder_name" class="input_label">
                        Email
                      </label>
                      <input
                        id="email"
                        class="input_field"
                        type="email"
                        name="cardholder_name"
                        title="Input title"
                        placeholder="Entrer votre Email"  value={email}
                        onChange={(e) => setemail(e.target.value)} style={{color:"white"}}
                      />
                    </div>
                    <div class="input_container">
                      <label for="card_number" class="input_label">
                        Mobile
                      </label>
                      <input
                        id="number"
                        class="input_field"
                        type="number"
                        name="number"
                        title="Input title"
                        placeholder="Votre numero de telephone"  value={mobile}
                        onChange={(e) => setmobile(e.target.value)} style={{color:"white"}}
                      />
                    </div>
                    <div class="input_container">
                      <label for="expiry_date" class="input_label">
                        Message
                      </label>
                      <textarea rows="4" cols="50"  value={message}
            onChange={(e) => setmessage(e.target.value)}>
                        Ecrivez votre message...
                      </textarea>
                    </div>
                  </div>
                  </form>
                  <button onClick={handleCreateAndUpload} className="fs-5" style={{paddingTop:"10px", paddingLeft:"40px", marginLeft:"150px"}}>Envoyer</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section get in touch */}
      {/* <footer className="bg-dark">
        <h5 className="text-center" style={{color:"white",paddingTop:"50px"}}>Made with</h5>
      </footer> */}
    </div>
  );
};

export default Portfolio;
