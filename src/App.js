import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Loadable from 'react-loadable'
import './assets/styles/App.css';

import Navbar from './components/navbar/index'
import { Spinner } from './components/spinner/index'
// import Home from './pages/index'
// import AboutUs from "./pages/about-us/index";
import { PageNotFound } from './components/errors/index';

const Home = Loadable({
  loader: () => import('./pages/index'),
  loading: Spinner
});

const AboutUs = Loadable({
  loader: () => import('./pages/about-us/index'),
  loading: Spinner
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <div style={{ marginTop: `${4}rem` }}>
            <Switch>
              <Route path="/" component={ Home } exact/>
              <Route path="/about-diatabs" component={ Spinner } />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
