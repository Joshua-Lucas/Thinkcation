import React, { useState, useEffect, createContext, Context } from "react";
import Axios from "axios";

const UserInfoContext = createContext();

export const UserInfoProvider: React.FC = ({ children }) => {
    const [userInfo, setUserInfo] = useState<string | string[] | number[]>([]);

    // retriving user info
    useEffect(() => {
        Axios.get("/api/user")
            .then((res) => setUserInfo(res.data))
            .catch(handleErrors);
    }, []);

    const handleErrors = (err: XMLHttpRequest) => {
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
