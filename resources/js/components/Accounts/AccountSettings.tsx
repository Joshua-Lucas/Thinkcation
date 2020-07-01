import React, { useContext } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Axios from "axios";
import NavBar from "../NavBar";
import UserAccount from "./UserAccount/UserAccount";
import UserProfile from "./UserProfile";
import UserListings from "./UserListings";
import PageNotFound from "../PageNotFound";
import NotSignedIn from "./Errors/NotSignedIn";
import UserInfoContext from "../Context/UserInforContext.js";

const AccountSettings: React.FC = () => {
    const history = useHistory();
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
