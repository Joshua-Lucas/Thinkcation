import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DisplayInns from './Inns/DisplayInns.js';
import PageNotFound from './PageNotFound.js';
import Login from './Auth/Login.js';
import Register from './Auth/Register.js';
import Dashboard from './UserDashboard.js';


const App = () =>  {
    return (
        <BrowserRouter>
            <div className="">
                <Switch>
                    <Route exact path="/"></Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <Register />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route   path="/inns"> 
                        <DisplayInns/>
                    </Route>
                    <Route path='/*'>
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;