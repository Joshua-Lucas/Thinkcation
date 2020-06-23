import React from "react";
import { Link } from "react-router-dom";
import PersonalInfo from "../../../PersonalInfo.svg";
import Security from "../../../Security.svg";
import Payments from "../../../Payment.svg";
import Notifications from "../../../Notifications.svg";
import Listings from "../../../Listings.svg";
import Trips from "../../../Trips.svg";

const UserAccount = ({ user, handleLogout }) => {
    const userName = `${user.firstname}  ${user.lastname}`;

    return (
        <div className="flex flex-col mx-auto w-full px-6 md:w-5/6 md:px-0 xl:px-6  2xl:w-3/5">
            <div className="ml-4 my-16">
                <h3 className="font-bold">Account</h3>
                <p>
                    {userName}, {user.email}{" "}
                    <Link
                        to="/account/profile"
                        className="text-darkaccent"
                        to="/account/profile"
                    >
                        Go to Profile
                    </Link>
                </p>
            </div>
            <div className=" w-full self-center grid grid-cols-2 lg:grid-cols-3 gap-4 -mx-2 px-2 ">
                <Link className="flex flex-col items-center p-6 rounded-lg shadow-xl bg-white md:items-start">
                    <img
                        className="mb-4 w-24 h-24 "
                        src={PersonalInfo}
                        alt="Payment || Payouts"
                    />

                    <h6 className="text-sm text-center md:mb-2 lg:text-lg  ">
                        Personal Info
                        <svg
                            className="hidden fill-current text-lightaccent w-6 h-6 md:inline"
                            viewBox="0 0 20 20"
                        >
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                    </h6>
                    <p className="hidden font-light text-sm md:block ">
                        Provide personal details and how we can reach you
                    </p>
                </Link>
                <Link className="flex flex-col items-center p-6 rounded-lg shadow-xl bg-white md:items-start">
                    <img
                        className="mb-4 w-24 h-24 "
                        src={Security}
                        alt="Payment || Payouts"
                    />

                    <h6 className="text-sm text-center md:mb-2 lg:text-lg  ">
                        Login &amp; security
                        <svg
                            className="hidden fill-current text-lightaccent w-6 h-6 md:inline"
                            viewBox="0 0 20 20"
                        >
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                    </h6>
                    <p className="hidden font-light text-sm md:block ">
                        Update your password and secure your account
                    </p>
                </Link>
                <Link className="flex flex-col items-center p-6 rounded-lg shadow-xl bg-white md:items-start">
                    <img
                        className="mb-4 w-24 h-24 "
                        src={Payments}
                        alt="Payment || Payouts"
                    />

                    <h6 className="text-sm text-center md:mb-2 lg:text-lg  ">
                        Payment &amp; payouts
                        <svg
                            className="hidden fill-current text-lightaccent w-6 h-6 md:inline"
                            viewBox="0 0 20 20"
                        >
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                    </h6>
                    <p className="hidden font-light text-sm md:block ">
                        Update your password and secure your account
                    </p>
                </Link>
                <Link className="flex flex-col items-center p-6 rounded-lg shadow-xl bg-white md:items-start">
                    <img
                        className="mb-4 w-24 h-24 "
                        src={Notifications}
                        alt=""
                    />

                    <h6 className="text-sm text-center md:mb-2 lg:text-lg  ">
                        Notifications
                        <svg
                            className="hidden fill-current text-lightaccent w-6 h-6 md:inline"
                            viewBox="0 0 20 20"
                        >
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                    </h6>
                    <p className="hidden font-light text-sm md:block ">
                        Update your password and secure your account
                    </p>
                </Link>
                <Link className="flex flex-col items-center p-6 rounded-lg shadow-xl bg-white md:items-start">
                    <img
                        className="mb-4 w-24 h-24 "
                        src={Listings}
                        alt="Payment || Payouts"
                    />

                    <h6 className="text-sm text-center md:mb-2 lg:text-lg  ">
                        Listings
                        <svg
                            className="hidden fill-current text-lightaccent w-6 h-6 md:inline"
                            viewBox="0 0 20 20"
                        >
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                    </h6>
                    <p className="hidden font-light text-sm md:block ">
                        Update your password and secure your account
                    </p>
                </Link>
                <Link className="flex flex-col items-center p-6 rounded-lg shadow-xl bg-white md:items-start">
                    <img className="mb-4 w-24 h-24 " src={Trips} alt="" />

                    <h6 className="text-sm  text-center md:mb-2 lg:text-lg  ">
                        Notifications
                        <svg
                            className="hidden fill-current text-lightaccent w-6 h-6 md:inline"
                            viewBox="0 0 20 20"
                        >
                            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                        </svg>
                    </h6>
                    <p className="hidden font-light text-sm md:block ">
                        Update your password and secure your account
                    </p>
                </Link>
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserAccount;
