import './App.css'

function App() {
  const gitHubUrl = "https://github.com/AlasDev";
  const linkedinUrl = "https://www.linkedin.com/in/davide-sala-686554294/";
  return (
    <>
      <section id="center">
        <div className="main">
          <h1>Work in progress...</h1>
          <a href={gitHubUrl} target="_blank">
            GitHub
          </a>
          <a href={linkedinUrl} target="_blank">
            LinkedIn
          </a>
        </div>
      </section>
    </>
  )
}

export default App
