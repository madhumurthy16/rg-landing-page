import React from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">  
          <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <Link className="navbar-brand" to='/'><img src='/assets/images/logo-color.svg' className="logo" alt="logo" /><span className="sr-only">(current)</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                  <Link className="nav-item nav-link active" to='/about' onClick={(e) => this.handleClick(e)}>About</Link>
                  <Link className="nav-item nav-link" to='/work' onClick={(e) => this.handleClick(e)}>Work</Link>
                  <Link className="nav-item nav-link" to='/work' onClick={(e) => this.handleClick(e)}>Contact</Link>

              </div>
            </div>
          </nav>
      </header>
      <main>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
      </main>
    </div>
  );
}

export default App;
