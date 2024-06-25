import { Col, Container, Row } from "react-bootstrap";
import imgproject from "../../assets/img/projettravail4.png";
import imgajou from "../../assets/img/ajou1351.png";
import imgsign from "../../assets/img/Capture d'écran 2024-06-11 164200.png";
import imgsigncop from "../../assets/img/sign47.png";



const Travaux = () => {
    return ( <div>
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
                className=""
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
    </div> );
}
 
export default Travaux;