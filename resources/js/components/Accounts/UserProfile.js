import React, { useContext } from "react";
import UserInfoContext from "../Context/UserInforContext";

const UserProfile = () => {
    const { userInfo } = useContext(UserInfoContext);

    return (
        <div>
            <h1>This is the user {userInfo.firstname}</h1>
        </div>
    );
};

export default UserProfile;
