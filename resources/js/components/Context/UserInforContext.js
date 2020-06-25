import React, { useState, useEffect } from "react";
import Axios from "axios";
import { createContext } from "react";

const UserInfoContext = createContext();

export const UserInfoProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState([]);

    // retriving user info
    useEffect(() => {
        Axios.get("/api/user")
            .then((res) => setUserInfo(res.data))
            .catch(handleErrors);
    }, []);

    const handleErrors = (err) => {
        if (err.response) {
            setUserInfo("guest");
        }
    };

    return (
        <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserInfoContext.Provider>
    );
};

export default UserInfoContext;
