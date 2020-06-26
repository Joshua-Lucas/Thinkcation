import React, { useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Axios from "axios";
import NavBar from "../NavBar.js";
import UserAccount from "./UserAccount.js";
import UserProfile from "./UserProfile.js";
import UserListings from "./UserListings.js";
import PageNotFound from "../PageNotFound.js";
import NotSignedIn from "./Errors/NotSignedIn.tsx";
import UserInfoContext from "../Context/UserInforContext.js";

const AccountSettings = () => {
    let history = useHistory();
    const { userInfo, setUserInfo } = useContext(UserInfoContext);

    const handleLogout = () => {
        Axios.post("/logout").then(() => {
            setUserInfo("guest");
            history.push("/login");
        });
    };

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/account">
                    {userInfo === "guest" ? (
                        <NotSignedIn />
                    ) : (
                        <UserAccount handleLogout={handleLogout} />
                    )}
                </Route>
                <Route exact path="/account/:profile">
                    <UserProfile />
                </Route>
                <Route exact path="/account/listings">
                    <UserListings />
                </Route>
                <Route path="/account/*">
                    <PageNotFound />
                </Route>
            </Switch>
        </div>
    );
};

export default AccountSettings;
