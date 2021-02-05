import uuid from 'uuid';

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
export const login = ( user = {}) => ({
  type: 'LOGIN',
  user
});

export const logout = ( id = {}) => ({
  type: 'LOGOUT',
  id
});

export const editUser = ( user = {}) => ({
  type: 'EDIT_USER',
  user
});

