import './App.css'
import ShapeWaves from "./component/ShapeWaves.tsx";

function App() {
  const githubUrl = "https://github.com/AlasDev";
  const linkedinUrl = "https://www.linkedin.com/in/davide-sala-686554294/";
  return (
      <>
          <div className="background">
              <ShapeWaves onError={console.error} color={'#0259DD'} hoverColor={'#EF5225'} shapes={'squares'}/>
          </div>
          <div className="main">
              <h1>Work in progress...</h1>
              <p>This page will be turned into a place i can use to display my projects</p>
              <a className="button" href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="button" href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          </div>
      </>
  )
}

export default App
