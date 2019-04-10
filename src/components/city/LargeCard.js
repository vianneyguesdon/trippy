import React from 'react';
import Config from '../../Config';
import styled, { css } from 'styled-components';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Container = styled.div`
  
`;

class LargeCard extends React.Component {
  render() {
    console.log("this.props CARD", this.props)

    const {
      name,
      source,
      slug
    } = this.props

    return (
      <Container className="col-md-6 col-12">
        <Link to={`/hotels?city=${slug}`}>
          <div>
            <img src={`${Config.host}${source}`} alt={name}/>
            <h5>{name}</h5>
          </div>
        </Link>
      </Container>
    );
  }
}

LargeCard.defaultProps = {
  name: "to be defined",
  source: "http://via.placeholder.com/300x200",
  slug: "ahahahahahah slug",
  // onClick: () => {},
}

export default LargeCard;