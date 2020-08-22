import React from 'react';
import {Redirect, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'

import './config/ReactotronConfig'

import { store } from './store'
import Home from './components/Home'
import Login from './components/Login'
import PrivateRoute from './helpers/private'
import GuestRoute from './helpers/guest'
import {isAuthenticated} from './components/Login'

function App(){
    return(
        <Provider store={store}>
            <Router>
                <Switch>
                    <GuestRoute isAuthenticated={isAuthenticated} component={Login} path="/login"/>
                    <PrivateRoute isAuthenticated={isAuthenticated} component = {Home} exact path="/"/>
                </Switch>
            </Router>
        </Provider>
    )

}

export default App



