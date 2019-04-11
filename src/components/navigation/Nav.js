import React from 'react';
import styled from 'styled-components';
import Global from '../../Global';

const Container = styled.div`
  opacity: 0.8;

  .my-nav {
    background-color: red !important;
    color: blue;
    z-index: 100;
  }

`;

class Nav extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      isScrolled: false,
      isReady: false,
      color: "navbar-dark",
    };
  }

  componentDidMount() {
    window.onscroll = this.onScroll.bind(this);
  }

  onScroll() {
    // console.log('on scroll (App)', window.scrollY)
    
    if (window.scrollY === 0) {
      this.setState({
        color: "navbar-dark",
      })
    }
    
    if (window.scrollY > 0) {
      if (this.state.color !== "bg-light navbar-light") {
        this.setState({
          color: "bg-light navbar-light"
        })
      } else {
        // console.log("else")
        return
      }
    }
  }

  render() {
    return (
      <Container>
        <nav>
        </nav>
      </Container>
    );
  }
}

export default Nav;