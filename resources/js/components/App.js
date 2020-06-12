import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DisplayInns from './Inns/DisplayInns.js';
import PageNotFound from './PageNotFound.js';
import Login from './Auth/Login.js';
import Register from './Auth/Register.js';
import NavBar from './NavBar.js';
import AccountSettings from './Accounts/AccountSettings.js';


const App = () =>  {
    return (
        <BrowserRouter>
            <div className="">
                <Switch>
                   
                    <Route exact path="/">
                        <NavBar/>
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <Register />
                    </Route>
                    <Route exact path="/account">
                        <AccountSettings />
                    </Route>
                    <Route   path="/inns"> 
                        <DisplayInns/>
                    </Route>
                    <Route >
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;