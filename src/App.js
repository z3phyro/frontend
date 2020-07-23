import React, {Suspense} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./views/home/home";
import {StoreContext} from 'storeon/react';
import {store} from "./core/store";
import Login from "./views/login/login";
import ProtectedRoute from "./core/utils/protectedRoute";
import ErrorBoundary from "./core/utils/errorBoundary";

const Onboarding = React.lazy(() => import('./views/onboarding/onboarding'));

export default function BasicExample() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
                <StoreContext.Provider value={store}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/login" component={Login}/>
                            <ProtectedRoute exact path="/onboarding" component={Onboarding}/>
                        </Switch>
                    </Router>
                </StoreContext.Provider>
            </Suspense>
        </ErrorBoundary>
    );
}
