import "./Home.css";
import github from "/assets/icons/githubIcon.svg";

function Home() {
  return (
    <>
      <header>
        <nav>
          <div className="left">
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
          <div className="right">
            <a href="">
              <div className="right-first">
                <img src={github} alt="github image" />
              </div>
              <div className="right-second">
                <p className="nav-right-first-text">Ravi_Ranjan</p>
                <p className="nav-right-second-text">raviranjanmishra01</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
      <div className="main-page"></div>
    </>
  );
}
export default Home;
