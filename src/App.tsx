import './App.css'
import ShapeWaves from "./component/ShapeWaves.tsx";
import {Card} from "./component/Card.tsx";
import {Links} from "./component/Links.tsx";

function App() {
  const placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  return (
      <>
          <div className="background">
              <ShapeWaves onError={console.error} color={'#0259DD'} hoverColor={'#EF5225'} introDuration={1}/>
          </div>
          <div className="main">
              <h1>Work in progress...</h1>
              <Card width={90}>
                  <h2>This page will be turned into a place i can use to display my projects</h2>
                  <p>{placeholderText}</p>
              </Card>
              <Links/>
          </div>
      </>
  )
}

export default App
