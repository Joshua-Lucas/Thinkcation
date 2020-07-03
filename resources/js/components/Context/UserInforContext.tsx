import React, { useState, useEffect, createContext } from "react";
import Axios, { AxiosError } from "axios";

export interface IUserInfo {
    birthday?: string;
    email?: string;
    email_verified_at?: boolean | null;
    firstname?: string;
    id?: number;
    lastname?: string;
    rating?: number | null;
    govid?: boolean | null;
    created_at?: string;
    updated_at?: string;
    setUserInfo: React.Dispatch<React.SetStateAction<string>>;
}

const UserInfoContext = createContext<IUserInfo>();

export const UserInfoProvider: React.FC = ({ children }) => {
    const [userInfo, setUserInfo] = useState("");

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
