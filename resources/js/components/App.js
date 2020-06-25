import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import DisplayInns from "./Inns/DisplayInns.js";
import PageNotFound from "./PageNotFound.js";
import Login from "./Auth/Login.js";
import Register from "./Auth/Register.js";
import NavBar from "./NavBar.js";
import AccountSettings from "./Accounts/AccountSettings.js";
import { UserInfoProvider } from "./Context/UserInforContext.js";

const App = () => {
    return (
        <BrowserRouter>
            <UserInfoProvider>
                <div className="">
                    <Switch>
                        <Route exact path="/">
                            <NavBar />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/signup">
                            <Register />
                        </Route>
                        <Route path="/account">
                            <AccountSettings />
                        </Route>
                        <Route path="/inns">
                            <DisplayInns />
                        </Route>
                        <Route path="/*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                </div>
            </UserInfoProvider>
        </BrowserRouter>
    );
};

export default App;
