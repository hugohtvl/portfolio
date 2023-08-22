import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import delorean from "../assets/delorean.png";

const Home = () => {
  return (
    <>
      <main id="homeGlobal">
        <div id="deloreanTitle">
          <img src={delorean} alt="DeLorean" />
          <div id="titleAlone">
            <h1>
              Développeur
              <br />
              <span id="homeTitle">Full Stack</span>
            </h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
