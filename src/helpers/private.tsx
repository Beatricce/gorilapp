import React, { Component } from 'react'
import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component, isAuthenticated,...rest}: any) => {
    console.log(isAuthenticated())
    const routeComponent = (props: any) => (
        isAuthenticated()
            ? React.createElement(component, props)
            : <Redirect to={{pathname: '/login'}}/>
    )
    return <Route {...rest} render={routeComponent}/>;
}
export default PrivateRoute