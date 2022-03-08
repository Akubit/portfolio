import './assets/css/App.scss';
import logo from './assets/img/logo/logo.svg'

import React,{ useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import ScrollToTop from './assets/js/ScrollToTop';


function App() {
  const [showMenu, setMenu] = useState(false);

  const handleToggle = () => {
    setMenu(!showMenu);  
  };
  return (
    <div className="App">
      <Router>

          <div className="navbar">
          <div className="logo">
            <img src={logo} className="navbar-logo" alt="Élise Brodin - Front-end Web Developer" />
          </div>

          <nav className="navbar-nav">
              <div className="menu-mobile">
                <button onClick={handleToggle}>
                  Menu</button>
                </div>
              <ul className={showMenu ? "active" : ""}>
                <button onClick={handleToggle}>
                  Close
                </button>
              <NavLink activeClassName='is-active' to="/" exact className="nav-links">Intro</NavLink>
                  <NavLink activeClassName='is-active' to="/about" className="nav-links">About</NavLink>
                  <NavLink activeClassName='is-active' to="/portfolio" className="nav-links">Portfolio</NavLink>
                  <NavLink activeClassName='is-active' to="/contact" className="nav-links">Contact</NavLink>
              </ul>
          </nav>
          </div>
          <div className="sections">
            <ScrollToTop>
              <TransitionGroup>
                <CSSTransition

                              classNames="fade"
                              timeout={6000}
                              appear
                              >
                <Switch>
              <Route exact path="/">
                <Intro/>
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              {/* <Route path="/portfolio">
                <Portfolio />
              </Route> */}
            </Switch>

                </CSSTransition>
              </TransitionGroup>
            

            </ScrollToTop>
          </div>
      </Router>
    </div>
  );
}

export default App;
