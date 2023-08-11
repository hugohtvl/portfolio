import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import delorean from "../assets/delorean.png";

const Home = () => {
  return (
    <>
      <div id="homeGlobal">
        <NavBar />
        <div id="deloreanTitle">
          <img src={delorean} alt="DeLorean" />
          <div id="titleAlone">
            <h1>Développeur</h1>
            <p>Full Stack</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
