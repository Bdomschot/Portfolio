import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      title: "Benjamin Domschot",
      headerLinks: [
        { title: "Home", paths: "/" },
        { title: "Contact", paths: "/contact" },
        { title: "Resume", paths: "/resume" },
        { title: "Portfolio", paths: "/portfolio" }
      ],
      home: {
        title: "Full Stack Website Developer",
      },
      contact: {
        title: "Contact me",
      },
      resume: {
        title: "Resume",
      },
      portfolio: {
        title: "Portfolio",
      },


    }
  }

  render() {
    return (
      <Router>
            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
            <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}  />} />
            <Route path="/resume" exact render={() => <ResumePage title={this.state.resume.title}  />} />
            <Route path="/portfolio" exact render={() => <PortfolioPage title={this.state.portfolio.title}  />} />
            <Footer />
      </Router>
    );
  }
}

export default App;
