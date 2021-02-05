import React from 'react';
import { connect } from 'react-redux';
import {Container, Col, Row, Button} from 'react-bootstrap';
import { logout } from '../actions/users';

class GamesPage extends React.Component {
  render() {
    console.log(this.props)
    this.state = {
        games: [{title: 'First game', description: 'First game description'},
        {title: 'Second game', description: 'Second game description'},
        {title: 'Third game', description: 'Third game description'},
        {title: 'Forth game', description: 'Forth game description'}
        ],
        user: this.props.user[0] 
    };
    return (
      <React.Fragment>
        <Container>
          <Row className="text-center">
            {this.state.games.map((game, index) => {
                return ([
                <Col className="game-box" key={index} md={4} xs={6}>
                <p>{game.title}</p>
                <p>{game.description}</p>
                <Button variant="primary" size="lg">
                {this.state.user ? (
                  <div>
                Play for real
                </div>
                ) : <div>Play for fun</div>
              }
                </Button>
                </Col>
                ]);
            })}    
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    user: state.users.filter(x => x.isAuthenticated == true)
  };
};

export default connect(mapStateToProps)(GamesPage);