import React from 'react';
import {Container, Col, Row, Button} from 'react-bootstrap';

export default class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        games: [{title: 'First game', description: 'First game description'},
        {title: 'Second game', description: 'Second game description'},
        {title: 'Third game', description: 'Third game description'},
        {title: 'Forth game', description: 'Forth game description'}
        ],
        user: props.user[0] 
    };

    console.log(this.state.user)


  }

  render(){
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

    )
}
}

