import React from 'react';
import Home from '../components/core/Home';
import Api from '../utils/Api';

class HomeContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      cities: []
    };
  }

  componentDidMount() {
    Api.getHome()
      .then(cities => {
        this.setState({
          cities
        })
        // console.log(">> #componentDidMount cities:", cities)
      })
  }

  render() {
    // Ici on met toujours une codition dans l'élément qui gère le fetch
    if(this.state.cities.length === 0)
      return "error. I'm waiting for the data"
    return (
      <div style={{height: 3000}}>
        <Home cities={this.state.cities}/>
      </div>
    );
  }
}

export default HomeContainer;