import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';

// import Config from './Config';
// import Global from './Global';

class App extends Component {
  render() {
    return (
      <Router>
        <div></div>
        <Route path="/" component={HomeContainer}/>
      </Router>
    );
  }
}

export default App;
