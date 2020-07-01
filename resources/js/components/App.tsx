import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DisplayInns from "./Inns/DisplayInns";
import PageNotFound from "./PageNotFound";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import NavBar from "./NavBar";
import AccountSettings from "./Accounts/AccountSettings";
import { UserInfoProvider } from "./Context/UserInforContext.js";

const App: React.FC = () => {
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
