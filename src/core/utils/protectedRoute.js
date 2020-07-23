import React from 'react';
import {Redirect} from "react-router-dom";
import {Route} from "react-router-dom";
import {useStoreon} from "storeon/react";

const ProtectedRoute = (props) => {
    const {isAuthenticated} = useStoreon('isAuthenticated');

    return isAuthenticated ? <Route {...props}/> : <Redirect to={{pathname: '/login'}}/>
}

export default ProtectedRoute;
