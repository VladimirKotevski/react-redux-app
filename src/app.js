import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addUser } from './actions/users';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const store = configureStore();

store.dispatch(addUser({ userName: 'Vladimir', password: 'test', isAuthenticated: false }));
store.dispatch(addUser({ userName: 'Vladimir1', password: 'test1', isAuthenticated: false }));
store.dispatch(addUser({ userName: 'Vladimir2', password: 'test2', isAuthenticated: false }));

console.log('test', store.getState())

store.subscribe(() => {
  console.log('test2', store.getState());
});

const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
