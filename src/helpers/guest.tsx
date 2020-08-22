import React, { Component } from 'react'
import {Redirect, Route} from 'react-router-dom'

const GuestRoute = ({component, isAuthenticated,...rest}: any) => {
    console.log(isAuthenticated())
    const routeComponent = (props: any) => (
        isAuthenticated()
            ? <Redirect to={{pathname: '/'}}/> 
            : React.createElement(component, props)
    );
    return <Route {...rest} render={routeComponent}/>;
}
export default GuestRoute