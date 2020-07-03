import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LinkContianer from "./LinkContainer";
import PersonalInfo from "../svg/PersonalInfoLogo";
import Security from "../svg/SecurityLogo";
import Payments from "../svg/PaymentsLogo";
import Notifications from "../svg/NotificationsLogo";
import Listings from "../svg/Listings";
import Trips from "../svg/TripsLogo";
import UserInfoContext from "../../Context/UserInforContext";

interface IProps {
    handleLogout: () => void;
}

const UserAccount: React.FC<IProps> = ({ handleLogout }) => {
    const { userInfo } = useContext(UserInfoContext);

    const userName = `${userInfo.firstname}  ${userInfo.lastname}`;

    return (
        <div className="flex flex-col mx-auto w-full px-6 md:w-5/6 md:px-0 xl:px-6  2xl:w-3/5">
            <div className="ml-4 my-16">
                <h3 className="font-bold">Account</h3>
                <p>
                    {userName}, {userInfo.email}{" "}
                    <Link to="/account/profile" className="text-darkaccent">
                        Go to Profile
                    </Link>
                </p>
            </div>
            <div className=" w-full self-center grid grid-cols-2 lg:grid-cols-3 gap-4 -mx-2 px-2 ">
                <LinkContianer
                    to="/account/personalinfo"
                    logo={<PersonalInfo cssStyle="mb-4 w-24 h-24 " />}
                    title="Personal Info"
                    description="Provide personal details and how we can reach you"
                />
                <LinkContianer
                    to="#"
                    logo={<Security cssStyle="mb-4 w-24 h-24 " />}
                    title="Login &amp; security"
                    description="Update your password and secure your account"
                />
                <LinkContianer
                    to="#"
                    logo={<Payments cssStyle="mb-4 w-24 h-24 " />}
                    title="Payment &amp; payouts"
                    description="Review payments, payouts, coupons, giftcards and taxes"
                />
                <LinkContianer
                    to="#"
                    logo={<Notifications cssStyle="mb-4 w-24 h-24 " />}
                    title="Notifications"
                    description="Choose notifcation perferences and how you want to be contacted"
                />
                <LinkContianer
                    to="#"
                    logo={<Listings cssStyle="mb-4 w-24 h-24 " />}
                    title="Listings"
                    description="Manage your listings"
                />
                <LinkContianer
                    to="#"
                    logo={<Trips cssStyle="mb-4 w-24 h-24 " />}
                    title="Trips"
                    description="View and edit up coming trips"
                />
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserAccount;
