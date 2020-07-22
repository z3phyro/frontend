import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./views/home/home";
import {StoreContext} from 'storeon/react';
import {store} from "./store";

export default function BasicExample() {
    return (
        <StoreContext.Provider value={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
        </StoreContext.Provider>
    );
}
