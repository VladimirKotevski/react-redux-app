import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import {Container, Col, Row, Navbar, Nav} from 'react-bootstrap';
import { logout } from '../actions/users';

class Header extends React.Component {
  render() {
    console.log(this.props)
    this.state = {
        userName: this.props.user[0] ? this.props.user[0].userName : '',
        id: this.props.user[0] ? this.props.user[0].id : ''
      
    };
    const logOut = () => {
      this.props.dispatch(logout( this.state.id))
      this.props.history.push('/');
    };
    return (
      <header>
      <Container>
        <h1>React Redux app</h1>
      </Container>
      <Row>
      <Col xs={12}>
        <Navbar expand="lg">
          <Container>
          <Nav className="mr-auto">
            <NavLink to="/" exact={true}>Game browser</NavLink>
          </Nav>
          {this.state.userName ? (
            <React.Fragment>
              <NavLink to="/setings">Settings</NavLink>
              <Navbar.Text>
              Signed in as: {this.state.userName}
              </Navbar.Text>
              <Navbar.Text className="logout" onClick={logOut}>
              Log out
              </Navbar.Text>
            </React.Fragment>
          ) : <NavLink to="/login">Log in</NavLink> }
          </Container>
        </Navbar>
      </Col>
      </Row>
      </header>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    user: state.users.filter(x => x.isAuthenticated == true)
  };
};

export default withRouter(connect(mapStateToProps)(Header));
