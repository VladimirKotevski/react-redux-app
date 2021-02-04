import React from 'react';
import { connect } from 'react-redux';
import {Container} from 'react-bootstrap';
import GamesList from './GamesList';

const GamesPage = (props) => (
	<div>
	<Container className="text-center">
    <h1>Games List</h1>
    </Container>
    <GamesList 
    {...props}
     />
    </div>
);

const mapStateToProps = (state) => {
  return {
    user: state.users.filter(x => x.isAuthenticated == true)
  };
};

export default connect(mapStateToProps)(GamesPage);
