const usersReducerDefaultState = [];

export default (state = usersReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.user
      ];
    
    case 'EDIT_USER':
      return state.map((user) => {
        if (user.id === action.user.id) {
          return {
            ...user,
            userName : action.user.userName
          };
        } else {
          return user;
        };
      });
    
    default:
      return state;
  }
};
