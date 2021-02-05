import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addUser } from './actions/users';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const store = configureStore();

store.dispatch(addUser({ userName: 'vladimir', password: 'vladimir123', isAuthenticated: false }));
store.dispatch(addUser({ userName: 'testing', password: 'testing123', isAuthenticated: false }));


const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
