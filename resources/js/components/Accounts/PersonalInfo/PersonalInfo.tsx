import React, {
    useContext,
    useState,
    useLayoutEffect,
    FormEventHandler,
} from "react";
import { Link } from "react-router-dom";
import UserInfoContext from "../../Context/UserInforContext";
import InfoContainer from "./InfoContainer";

const PersonalInfo: React.FC = () => {
    const { userInfo } = useContext(UserInfoContext);

    const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit processed");
    };

    return (
        <div>
            <p>
                <Link to="/account">Account</Link>&gt;PersonalInfo
            </p>
            <h1>Your Personal Info</h1>
            <InfoContainer
                inputType="text"
                data-testid="name"
                title="Name"
                details={`${userInfo.firstname}  ${userInfo.lastname} `}
                submitEdit={handleEditSubmit}
            />
            <InfoContainer
                inputType="select"
                data-testid="gender"
                title="Gender"
                details={
                    userInfo.gender === null
                        ? "Not specified"
                        : `${userInfo.gender}`
                }
                submitEdit={handleEditSubmit}
            />
            <InfoContainer
                inputType="date"
                data-testid="birthday"
                title="Date of Birth"
                details={userInfo.birthday}
                submitEdit={handleEditSubmit}
            />
            <InfoContainer
                inputType="text"
                data-testid="email"
                title="Email"
                details={userInfo.email}
                submitEdit={handleEditSubmit}
            />
            <InfoContainer
                inputType="text"
                data-testid="phoneNumber"
                title="Phone Number"
                details={
                    userInfo.phone === null ? "Not provided" : userInfo.phone
                }
                submitEdit={handleEditSubmit}
            />
            <InfoContainer
                inputType="text"
                data-testid="govId"
                title="Government Id"
                details={userInfo.govementId ? "Verified" : "Not provided"}
                submitEdit={handleEditSubmit}
            />

            <p></p>
        </div>
    );
};
export default PersonalInfo;
