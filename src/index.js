import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux'

import Login from './component/login';
import Main from './component/main';
import Register from './component/register';
import store from './redux/store';



ReactDOM.render(
    (
    <Provider store={store}>
        <HashRouter>
            <Switch>
        <Route path='/login' component= {Login}/>
        <Route path='/main' component= {Main}/>
        <Route path='/register' component= {Register}/>
    </Switch>
    </HashRouter>
    </Provider>
    ),document.getElementById('root'));

