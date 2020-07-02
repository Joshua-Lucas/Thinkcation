import React, { useState, useEffect, createContext } from "react";
import Axios, { AxiosError } from "axios";

const UserInfoContext = createContext<any>();

export const UserInfoProvider: React.FC = ({ children }) => {
    const [userInfo, setUserInfo] = useState<string | string[] | number[]>([]);

    // retriving user info
    useEffect(() => {
        Axios.get("/api/user")
            .then((res) => setUserInfo(res.data))
            .catch(handleErrors);
    }, []);

    const handleErrors = (err: AxiosError) => {
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
