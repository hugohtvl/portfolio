import { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
import linkedinLogo from "../assets/linkedin.png";
import gitHubLogo from "../assets/github.png";
import mailLogoBlack from "../assets/envelope-black.png";
import sendLogo from "../assets/send-logo.png";
// import mailLogoBlue from "../assets/envelope-blue.png";
// import phoneLogo from "../assets/phone.png";

const Contact = () => {
  const serviceid = import.meta.env.VITE_REACT_APP_YOUR_SERVICE_ID;
  const templateid = import.meta.env.VITE_REACT_APP_YOUR_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_REACT_APP_YOUR_PUBLIC_KEY;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceid, templateid, form.current, publicKey).then(
      (result) => {
        document.contactForm.reset();
        Swal.fire("Merci !", "Votre message a bien été envoyé 🙂", "success");
        // alert("Merci, votre message a bien été envoyé 🙂");
        console.info(result.text);
        switchButton === "un Particulier"
          ? setSwitchButton("un Professionnel")
          : setSwitchButton("un Professionnel");
      },
      (error) => {
        console.info(error.text);
        Swal.fire({
          icon: "error",
          title: "Aie !",
          text: "Malheureusement il y a un souci, le message n'a pas pu être envoyé 😞",
          footer: "N'hésitez pas à prendre contact avec moi sur LinkedIn 😉",
          confirmButtonColor: "#62A1CC",
          customClass: {
            confirmButton: "custom-font",
          },
        });
        // alert(
        //   "Malheureusement il y a un souci, le message n'a pas pu être envoyé 😞 n'hésitez pas à prendre contact avec moi sur LinkedIn !"
        // );
      }
    );
  };

  const [switchButton, setSwitchButton] = useState("un Professionnel");
  const handleChange = () => {
    if (switchButton === "un Professionnel") {
      setSwitchButton("un Particulier");
    } else {
      setSwitchButton("un Professionnel");
    }
  };

  return (
    <main id="contactGlobal">
      <section id="globalCards">
        <div className="contactCards">
          <div className="infoContactCards">
            <img src={linkedinLogo} alt="Logo du réseau social LinkedIn" />
            <a
              href="https://www.linkedin.com/in/hugohattenville/"
              target="_blank"
            >
              <span>Profil</span> LinkedIn
            </a>
            <img src={gitHubLogo} alt="Logo du site internet GitHub" />
            <a href="https://github.com/hugohtvl" target="_blank">
              <span>Profil</span> GitHub
            </a>
          </div>
        </div>
        {/* <div className="contactCards">
          <div className="infoContactCards">
            <img src={mailLogoBlue} alt="Logo d'une enveloppe" />
            <a href="mailto:mon.mail@gmail.com" target="_blank">
              mon.mail@gmail.com
            </a>
          </div>
          <div className="infoContactCards">
            <img src={phoneLogo} alt="Logo d'un téléphone" />
            <p>06 06 06 06 06</p>
          </div>
        </div> */}
        <div className="contactCards">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form"
            name="contactForm"
          >
            <div className="formContactCard">
              <div id="titleMessage">
                <img src={mailLogoBlack} alt="Logo d'une enveloppe" />
                <h2>Message</h2>
              </div>
            </div>
            <div className="formContactCard">
              <div id="switchButton">
                <p>
                  <i>Vous êtes :</i>
                </p>
                <div id="proAndPart">
                  <p>
                    <b>un Professionnel</b>
                  </p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      onClick={handleChange}
                      name={switchButton}
                    />
                    <span className="slider round"></span>
                  </label>
                  <p>
                    <b>un Particulier</b>
                  </p>
                </div>
              </div>
            </div>
            <div id={switchButton === "un Professionnel" ? "inputGroup" : ""}>
              <div
                className={
                  switchButton === "un Professionnel"
                    ? "inputDouble"
                    : "inputAlone"
                }
              >
                <label htmlFor="name">Prénom & Nom :</label>
                <input
                  type="text"
                  id="inputName"
                  name="name"
                  required
                  minLength="4"
                  maxLength="25"
                />
              </div>
              {switchButton === "un Professionnel" ? (
                <div className="inputDouble">
                  <label htmlFor="company">Nom de l'entreprise :</label>
                  <input
                    type="text"
                    id="inputCompany"
                    name="company"
                    required
                    minLength="3"
                    maxLength="20"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div id="inputGroup">
              <div className="inputDouble">
                <label htmlFor="email">Adresse e-mail :</label>
                <input
                  type="email"
                  id="inputMail"
                  name="email"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  required
                  minLength="4"
                  maxLength="25"
                />
              </div>
              <div className="inputDouble">
                <label htmlFor="phone">Téléphone :</label>
                <input
                  type="tel"
                  id="inputPhone"
                  name="phone"
                  pattern="[0]{1}[1-9]{1}[0-9]{8}"
                  required
                  minLength="10"
                  maxLength="10"
                />
              </div>
            </div>
            <div className="inputAloneDiv">
              <div className="inputAlone">
                <label htmlFor="message">Message :</label>
                <textarea
                  type="textarea"
                  id="inputMessage"
                  name="message"
                  required
                  maxLength="800"
                />
              </div>
            </div>
            <div id="buttonSubmit">
              <button type="submit">
                <img src={sendLogo} />
                <label htmlFor="send">Envoyer</label>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
