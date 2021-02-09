import React from 'react';
import { connect } from 'react-redux';
import {Container, Col, Row, Button} from 'react-bootstrap';
import { logout } from '../actions/users';

class GamesPage extends React.Component {
  render() {
    this.state = {
        games: [{title: 'Book of Dead', image: 'book-of-dead', popular: false},
        {title: 'Solar Queen', image: 'andar-bahar', popular: true},
        {title: 'Razor Shark', image: 'blackjack', popular: false},
        {title: 'Starburst', image: 'teen-patti', popular: false},
        {title: 'Fire Joker', image: 'casino-scene', popular: false},
        {title: 'Crazy Time', image: 'book-of-dead', popular: false},
        {title: 'Andar Bahar', image: 'andar-bahar', popular: false},
        {title: 'Roulette', image: 'casino-scene', popular: true},
        {title: 'Blackjack', image: 'blackjack', popular: false},
        {title: 'Teen Patti', image: 'teen-patti', popular: false},
        ],
        user: this.props.user[0] 
    };
    return (
      <React.Fragment>
        <Container className="games-container">
          <Row className="text-center">
            {this.state.games.map((game, index) => {
                return ([
                <Col className={game.popular == true ? 'game-box col-md-6 col-12' : 'game-box col-md-3 col-12'} key={index} >
                 <img className="game-image" src={window.location.origin + '/images/' + game.image + '.jpg'} alt=""></img>
                 <Button className="play-button" variant="primary" size="lg">
                  {this.state.user ? (
                  <div className="play-text">
                    Play for real
                  </div>
                  ) : <div className="play-text">Play for fun</div>
                  }
                  </Button>
                    <p className="game-title">{game.title}</p>
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