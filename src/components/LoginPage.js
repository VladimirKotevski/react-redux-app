import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/users';
import LoginForm from './LoginForm';

const LoginPage = (props) => {
  console.log(props)
  return (
    <div>
      <LoginForm
        onSubmit={(user) => {
          props.dispatch(login(user));
          props.history.push('/');
        }}
      />
    </div>
  );
};



export default connect()(LoginPage);
