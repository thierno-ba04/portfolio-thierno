import { Col, Container, Nav, Navbar as BootstrapNavbar, Row } from "react-bootstrap";
import "animate.css";


const phoneNumber = "221770799748"; // Remplacez ce numéro par le vôtre au format international
const linkedinProfileUrl = "https://www.linkedin.com/feed/?trk=404_page"; // Remplacez par l'URL de votre profil LinkedIn
const instagramProfileUrl = "https://www.instagram.com/"; // Remplacez par l'URL de votre profil Instagram




const Navbars = () => {
  return ( 
      <div>
        <BootstrapNavbar
      expand="lg"
      className="bg-dark fixed-top"
      style={{ color: "white" }}
    >
      <Container>
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
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
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <div>
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar> 
      </div>
   );
}
 
export default Navbars;
