import uuid from 'uuid';

// ADD_EXPENSE
export const addUser = (
  {
    userName = '',
    password = '',
    isAuthenticated = false
  } = {}
) => ({
  type: 'ADD_USER',
  user: {
    id: uuid(),
    userName,
    password,
    isAuthenticated
  }
});

// REMOVE_EXPENSE
export const login = ( user = {}) => ({
  type: 'LOGIN',
  user
});

export const logout = ( id = {}) => ({
  type: 'LOGOUT',
  id
});

// EDIT_EXPENSE
export const editUser = ( user = {}) => ({
  type: 'EDIT_USER',
  user
});
