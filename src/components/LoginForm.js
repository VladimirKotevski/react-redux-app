import React from 'react';
import {Container, Col, Row, Button, Form} from 'react-bootstrap';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      error: ''
    };
  }
  onUserNameChange = (e) => {
    const userName = e.target.value;
    this.setState(() => ({ userName }));
  };
  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.userName || !this.state.password) {
      this.setState(() => ({ error: 'Please provide userName and password.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        userName: this.state.userName,
        password: this.state.password,
      });
    }
  };
  render() {
    return (
      <Container className="form-container">
        <Row className="justify-content-center">
        <Col md={6} xs={12}>
        {this.state.error && <p>{this.state.error}</p>}
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="userName">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" 
            placeholder="user name" 
            autoFocus 
            value={this.state.userName} 
            onChange={this.onUserNameChange} />
          </Form.Group>

          <Form.Group controlId="Password">
            <Form.Label>Password</Form.Label>
              <Form.Control type="password" 
              placeholder="Password" 
              value={this.state.password} 
              onChange={this.onPasswordChange} />
          </Form.Group>
          <Button variant="primary" type="submit" size="lg">
            Login
          </Button>
        </Form>
        </Col>
        </Row>
      </Container>
    )
  }
}
