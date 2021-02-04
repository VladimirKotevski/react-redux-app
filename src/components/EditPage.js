import React from 'react';
import { connect } from 'react-redux';
import EditForm from './EditForm';
import { editUser } from '../actions/users';

const EditPage = (props) => {
  return (
    <div>
      <EditForm
        logedInUser={props.user}
        onSubmit={(logedInUser) => {
          props.dispatch(editUser(logedInUser));
          props.history.push('/');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users.filter(x => x.isAuthenticated == true)
  };
};


export default connect(mapStateToProps)(EditPage);
