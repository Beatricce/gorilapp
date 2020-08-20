import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'

import './config/ReactotronConfig'

import { store } from './store'
import GlobalStyle from './styles'
import Home from './components/Home'

function App(){
    return(
        <Provider store={store}>
            <GlobalStyle/>
            <Router>
                <Switch>
                    <Route component = {Home} exact path="/"/>
                </Switch>
            </Router>
        </Provider>
    )

}

export default App;