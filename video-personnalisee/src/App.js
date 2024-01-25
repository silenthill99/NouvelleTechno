import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import {Home} from "./Pages/Home";
import AllTheSmallThings from "./assets/video/blink-182 - All The Small Things (Official Music Video).mp4"

function App() {
  return (
      <div>
          <header>
              <nav>
                  <h1><NavLink to="#">Titre</NavLink></h1>
                  <ul>
                      <li><NavLink to="">Menu 1</NavLink></li>
                      <li><NavLink to="">Menu 2</NavLink></li>
                      <li><NavLink to="">Menu 3</NavLink></li>
                  </ul>
              </nav>
              <video loop muted autoPlay>
                  <source src={AllTheSmallThings} type="video/mp4"/>
              </video>
              <div id="header-content">
                  <h2>Welcome to this website !</h2>
                  <p>You'll find useful informations here</p>
                  <a href="#more">View more</a>
              </div>
          </header>
          <Routes>
              <Route path="" element={<Home/>}/>
          </Routes>
      </div>
  );
}

export default App;
