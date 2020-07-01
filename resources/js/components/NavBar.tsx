import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserInfoContext from "./Context/UserInforContext";

const NavBar: React.FC = () => {
    const { userInfo } = useContext(UserInfoContext);

    console.log(userInfo);

    return (
        <div className="flex justify-around py-6 shadow-md ">
            <div>
                <Link to="/">
                    <img src="#" alt="thinkcation|Logo"></img>
                </Link>
            </div>
            <div className="flex justify-center px-8 space-x-4">
                <Link to="/HostHome">Host your home</Link>

                {userInfo === "guest" ? (
                    <Link to="/login">Login</Link>
                ) : (
                    <Link to="/account">{userInfo.firstname}</Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
