import React from 'react';
import { connect } from 'react-redux';
import {Container, Row} from 'react-bootstrap';
import HeaderMenu from './HeaderMenu';

const Header = (props) => (

  <header>
    <Container>
    <h1>Test app</h1>
    </Container>
    <HeaderMenu 
    {...props}
    />
  </header>
);

const mapStateToProps = (state, props) => {
  console.log(props)
  const vlade = state.users.filter(x => x.isAuthenticated == true)
  console.log('so e ova' , vlade)
  return {
    user: state.users.filter(x => x.isAuthenticated == true)
  };
};

export default connect(mapStateToProps)(Header);
