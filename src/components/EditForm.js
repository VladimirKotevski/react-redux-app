import React from 'react';
import {Container, Col, Row, Button, Form} from 'react-bootstrap';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: props.logedInUser[0] ? props.logedInUser[0].userName : '',
      id: props.logedInUser[0] ? props.logedInUser[0].id : '',
      error: ''
    };
  }
  onUserNameChange = (e) => {
    const userName = e.target.value;
    this.setState(() => ({ userName }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.userName) {
      this.setState(() => ({ error: 'Please provide user name' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        userName: this.state.userName,
        id: this.state.id
      });
    }
  };
  render() {
    return (
      <Container className="form-container">
        <Row className="justify-content-center">
        <Col xs={12} className="text-center">
        <h1>Edit your user name</h1>
        </Col>
        <Col md={6} xs={12}>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="userName">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" 
            autoFocus 
            value={this.state.userName} 
            onChange={this.onUserNameChange} />
          </Form.Group>

          <Button variant="primary" type="submit" size="lg">
            Edit user
          </Button>
        </Form>
        {this.state.error && <p className="alert-msg">{this.state.error}</p>}
        </Col>
        </Row>
      </Container>
    )
  }
}

