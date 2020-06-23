import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserInfoContext from "../components/Context/UserInforContext.js";
import Axios from "axios";

const NavBar = () => {
    const [userInfo] = useContext(UserInfoContext);

    return (
        <div>
            <Link to="/HostHome">Host your home</Link>

            {userInfo === "guest" ? (
                <Link to="/login">Login</Link>
            ) : (
                <Link to="/dashboard">{userInfo.name}</Link>
            )}
        </div>
    );
};

export default NavBar;
