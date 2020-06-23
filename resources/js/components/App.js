import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserInfoContext from "./Context/UserInforContext.js";
import DisplayInns from "./Inns/DisplayInns.js";
import PageNotFound from "./PageNotFound.js";
import Login from "./Auth/Login.js";
import Register from "./Auth/Register.js";
import NavBar from "./NavBar.js";
import AccountSettings from "./Accounts/AccountSettings.js";

const App = () => {
    const userInfoHook = useState("guest");
    return (
        <BrowserRouter>
            <UserInfoContext.Provider value={userInfoHook}>
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
            </UserInfoContext.Provider>
        </BrowserRouter>
    );
};

export default App;
