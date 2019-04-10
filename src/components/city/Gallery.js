import React from 'react';
import styled, { css } from 'styled-components';
import Global from '../../Global';
import LargeCard from './LargeCard';
import Card from './Card';

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${Global.color.body};
  font-family: ${Global.font.primary};
`;

class Gallery extends React.Component {
  
  render() {

    const {
      cities
    } = this.props

    console.log("cities GALLERY", cities)
    console.log("paris ??? GALLERY", cities[0])

    return (
      <Container className="row">
        <div className="col-md-12">
          <h2>Explore the World with Trippy ! <i className="fas fa-pills"></i></h2>
        </div>
        <div>
          <LargeCard name={cities[4].name} source={cities[4].source} slug={cities[4].slug}/>
          <div>
            {}
            <Card name={cities[0].name} source={cities[0].source} slug={cities[0].slug}/>
            <Card name={cities[1].name} source={cities[1].source} slug={cities[1].slug}/>
            <Card name={cities[2].name} source={cities[2].source} slug={cities[2].slug}/>
            <Card name={cities[3].name} source={cities[3].source} slug={cities[3].slug}/>
          </div>
        </div>
      </Container>
    );
  }
}

export default Gallery;