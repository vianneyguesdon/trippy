import React from 'react';
import Card from '../city/Card'

class Home extends React.Component {

  render() {
    console.log("this.props Home", this.props)
   
    const {
      cities
    } = this.props

    console.log("cities sans props apres destructuration", cities)
    
    return(
      // Map
      <div className="container">
        <div className="row">
          {cities.map((city, index) => {
            return(
              <div key={index} className="col-3">
                <Card 
                  name = {city.name}
                  slug = {city.slug}
                  source = {city.source}
                />
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default Home;