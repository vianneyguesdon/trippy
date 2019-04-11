import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import HotelContainer from './containers/HotelContainer';
import HotelsContainer from './containers/HotelsContainer';
import RestaurantContainer from './containers/RestaurantContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';
import NotFoundContainer from './containers/NotFoundContainer';
import Navigation from './components/navigation/index.js';
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 70px;
`;

class App extends Component {

  render() {
    return (
      <Router>
        <Navigation/>
        <Container>
          <Route path="/" component={HomeContainer}/>
          <Route path="/hotels" component={HotelsContainer}/>
          <Route path="/restaurants" component={RestaurantsContainer}/>
          <Route path="/hotels/:id" component={HotelContainer}/>
          <Route path="/restaurants/:id" component={RestaurantContainer}/>
          <Route path="/login" component={LoginContainer}/>
          <Route path="/signup" component={SignupContainer}/>
          <Route path="/*" component={NotFoundContainer}/>
        </Container>
      </Router>
    );
  }
}

export default App;
