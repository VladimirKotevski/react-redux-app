import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/users';
import {Container, Col, Row, Navbar, Nav} from 'react-bootstrap';

export default class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.user)
    this.state = {
        userName: props.user[0] ? props.user[0].userName : '',
        id: props.user[0] ? props.user[0].id : ''
      
    };
  }
  logOut = () => {
   this.props.dispatch(logout( this.state.id))
  };
  render() {
    return (
      <Row>
    <Col xs={12}>
    <Navbar bg="light" expand="lg">
    <Container>
    <Nav className="mr-auto">
      <NavLink to="/" activeClassName="is-active" exact={true}>Game browser</NavLink>
    </Nav>
    {this.state.userName ? (
    <React.Fragment>
      <NavLink to="/setings" activeClassName="is-active">Settings</NavLink>
      <Navbar.Text>
      Signed in as: {this.state.userName}
      </Navbar.Text>
      <Navbar.Text onClick={this.logOut}>
      Log out
      </Navbar.Text>
    </React.Fragment>
    ) : <NavLink to="/login" activeClassName="is-active">Log in</NavLink> }
    </Container>
  </Navbar>
  </Col>
  </Row>
    )
  }
}

