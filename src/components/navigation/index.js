import React from 'react';
import styled from 'styled-components';
import Global from '../../Global';

const { color, font, size, weight } = Global

const Nav = styled.div`
  width: 100%;
  position: fixed;
  height: ${size.navbar};
  top: 0;
  background-color: ${color.primary};
  z-index: 1000;
  color: ${color.tertiary};
`;

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      isScrolled: false,
      isReady: false,
    };
  }

  componentDidMount() {
    window.onscroll = this.onScroll.bind(this);
  }

  onScroll() {
    // console.log('on scroll (App)', window.scrollY)
    
    if (window.scrollY === 0) {
      this.setState({
        isScrolled: false,
      })
    }
    
    if (window.scrollY > 0) {
      if (this.state.isScrolled !== false) {
        this.setState({
          color: false
        })
      } else {
        // console.log("else")
        return
      }
    }
  }

  render() {
    console.log("this.state", this.state)
    
    return (
      <Nav className="container-fluid">
        TRIPPY
      </Nav>
    );
  }
}

export default Navigation;