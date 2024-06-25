import { Col, Container, Row } from "react-bootstrap";
import imgram from "../../assets/img/ramata.png";
import imglemaire from "../../assets/img/lemaire.jpg";
import imgbass from "../../assets/img/bass.jpg";
import imgvieux from "../../assets/img/vieux.png";



const Temoignage = () => {


    return ( <div>
           {/*-------- section testimonials------ */}
      <section
        id="Testimonials"
        className="Testimonials bg-dark"
        style={{ color: "white"}}
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
                      alt="" className="img-tes"
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
                      alt="" className="img-tes"
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
                      alt="" className="img-tes"
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
                      alt="" className="img-tes"
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
    </div> );
}
 
export default Temoignage;