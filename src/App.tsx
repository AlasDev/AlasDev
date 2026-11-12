import './App.css'
import ShapeWaves from "./component/ShapeWaves.tsx";
import githubIcon from "./assets/images/github.svg";
import linkedinIcon from "./assets/images/linkedin.svg";
import steamIcon from "./assets/images/steam.svg";

function App() {
  const githubUrl = "https://github.com/AlasDev";
  const linkedinUrl = "https://www.linkedin.com/in/davide-sala-686554294/";
  const steamUrl = "https://steamcommunity.com/id/AlasDev/";
  return (
      <>
          <div className="background">
              <ShapeWaves onError={console.error} color={'#0259DD'} hoverColor={'#EF5225'} shapes={'squares'}/>
          </div>
          <div className="main">
              <h1>Work in progress...</h1>
              <p>This page will be turned into a place i can use to display my projects</p>
              <div className="links">
                  <a href={linkedinUrl} target="_blank" rel="noreferrer">
                      <img className="imageIcon" src={linkedinIcon} alt="LinkedIn"/>
                  </a>
                  <a href={githubUrl} target="_blank" rel="noreferrer">
                      <img className="imageIcon" src={githubIcon} alt="GitHub"/>
                  </a>
                  <a href={steamUrl} target="_blank" rel="noreferrer">
                      <img className="imageIcon" src={steamIcon} alt="Steam"/>
                  </a>
              </div>
          </div>
      </>
  )
}

export default App
