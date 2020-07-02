import React, { useContext } from "react";
import UserInfoContext from "../../Context/UserInforContext";

const PersonalInfo: React.FC = () => {
    const { userInfo, setUserInfo } = useContext<any>(UserInfoContext);

    return (
        <div>
            <h1>Your Personal Info</h1>
            <p data-testid="name">{userInfo.name}</p>
            <p data-testid="gender">Male</p>
            <p data-testid="birthday">09/25/1991</p>
            <p data-testid="email">Joshua@test.com</p>
            <p data-testid="phoneNumber">null</p>
            <p data-testid="govId">Verified</p>
        </div>
    );
};
export default PersonalInfo;
