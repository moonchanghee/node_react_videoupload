import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { Switch ,BrowserRouter , Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import reducer from './reducers'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import MainPage from './components/MainPage'
import Login from './components/Login'
import Register from './components/Register'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = {store}>
     {/* <App /> */}
   {/* <MainPage/> */}
<BrowserRouter>
<Switch>
<Route  path ="/register" component ={Register} />
  <Route  path ="/login" component ={Login} />
  <Route  exact path ="/" component ={MainPage} />
</Switch>
</BrowserRouter>,
</Provider>,
document.getElementById('root')
);

serviceWorker.unregister();