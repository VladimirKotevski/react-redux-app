const usersReducerDefaultState = [];

export default (state = usersReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.user
      ];
    case 'LOGIN':
        return state.map((user) => {
        if (user.userName == action.user.userName) {
          return {
            ...user,
            isAuthenticated : true
          };
        } else {
          return user;
        };
      });
   
    case 'LOGOUT':
      return state.map((user) => {
        if (user.id === action.id) {
          return {
            ...user,
            isAuthenticated : false
          };
        } else {
          return user;
        };
      });
    default:
      return state;
  }
};
