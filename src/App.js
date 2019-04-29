import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import About from './components/About';
import OurServices from './components/OurServices';
import Contact from './components/Contact';
import './App.css';

let navBgColor = {
    backgroundColor: '#fafafa',
  };

class App extends Component {
  constructor() {
    super();
    this.previousLink = null;
  }

  handleNavClick = (e) => {
    if(this.previousLink !== null) {
      this.previousLink.classList.remove('active');
    }
    e.target.classList.add('active');
    this.previousLink = e.target;
  }
  
  render() {
    return (
      <div className="App">
        <header>  
            <nav className="navbar navbar-expand-md navbar-light fixed-top" style={navBgColor}>
              <Link className="navbar-brand" to='/' onClick={(e) => this.handleNavClick(e)}><img src='/assets/images/logo-color.svg' className="logo" alt="logo" /><span className="sr-only">(current)</span></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-item nav-link" to='/about' onClick={(e) => this.handleNavClick(e)}>About</Link>
                    <Link className="nav-item nav-link" to='/our-services' onClick={(e) => this.handleNavClick(e)}>Our Services</Link>
                    <Link className="nav-item nav-link" to='/contact' onClick={(e) => this.handleNavClick(e)}>Contact</Link>
                </div>
              </div>
            </nav>
        </header>
        <main>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/our-services" component={OurServices} />
            <Route path="/contact" component={Contact} />
        </main>
        <footer id="footer">
            <div className="container d-flex align-items-center justify-content-center">
              <small>©2019 Rooster Grin Media</small>
              <p>Follow Us</p>
              <img className="social-icon" src='/assets/images/instagram.svg' alt="icon indicating instagram logo"/>
              <img className="social-icon" src='/assets/images/facebook.svg' alt="icon indicating facebook logo"/>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
