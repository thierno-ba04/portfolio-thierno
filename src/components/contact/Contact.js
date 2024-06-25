import { Col, Container,  Row } from "react-bootstrap";
import "animate.css";
import { useEffect, useState } from "react";


import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { fireDb } from "../../firebase";


const phoneNumber = "221770799748"; // Remplacez ce numéro par le vôtre au format international
const linkedinProfileUrl = "https://www.linkedin.com/feed/?trk=404_page"; // Remplacez par l'URL de votre profil LinkedIn
const instagramProfileUrl = "https://www.instagram.com/"; // Remplacez par l'URL de votre profil Instagram




const Contact = () => {
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
                          class="fabrandss fa-brands fa-linkedin"
                          style={{
                            fontSize: "35px",
                            marginTop: "10px",
                            marginLeft: "55px",
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
                          class="fabrandss fa-brands fa-whatsapp"
                          style={{
                            fontSize: "35px",
                            marginTop: "10px",
                            marginLeft: "55px",
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
                          class="fabrandss fa-brands fa-instagram"
                          style={{
                            fontSize: "35px",
                            marginTop: "10px",
                            marginLeft: "55px",
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
                  <button onClick={handleCreateAndUpload} className="send fs-5" style={{paddingTop:"10px", paddingLeft:"40px", marginLeft:"150px"}}>Envoyer</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section get in touch */}
        </div>
    );
}
 
export default Contact;