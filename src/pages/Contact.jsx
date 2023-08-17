import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import linkedinLogo from "../assets/linkedin.png";
import mailLogo from "../assets/envelope.png";
import phoneLogo from "../assets/phone.png";

const Contact = () => {
  return (
    <main id="contactGlobal">
      <NavBar />
      <section id="globalCards">
        <div className="contactCards">
          <div className="infoContactCards">
            <img src={linkedinLogo} alt="Logo du réseau social LinkedIn" />
            <a
              href="https://www.linkedin.com/in/hugohattenville/"
              target="_blank"
            >
              Hugo Hattenville
            </a>
          </div>
        </div>
        <div className="contactCards">
          <div className="infoContactCards">
            <img src={mailLogo} alt="Logo d'une enveloppe" />
            <a href="mailto:mon.mail@gmail.com" target="_blank">
              mon.mail@gmail.com
            </a>
          </div>
          <div className="infoContactCards">
            <img src={phoneLogo} alt="Logo d'un téléphone" />
            <p>06 06 06 06 06</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Contact;
