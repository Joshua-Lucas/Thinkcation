import React  from 'react';
import { Link } from 'react-router-dom';




const UserAccount = ({user,handleLogout}) => 
{

    const userName = `${user.firstname}  ${user.lastname}`;

    return(

        <div className="flex flex-col mx-auto  w-4/6 mt-12">
                <div className>
                    <h1>Account</h1>
                    <p>{userName},  {user.email} <Link className="text-darkaccent" to="/account/profile">Go to Profile</Link></p>
                </div>
                <div className="self-center grid grid-cols-3 grid-4">
                    <Link className="flex flex-col p-8 rounded-lg shadow-xl">
                        <h6 className="pb-2">Personal Info</h6>
                        <p className="font-light">Provide personal details and how we can reach you</p>
                    </Link>
                    <Link>Login &amp; security </Link>
                    <Link>Payments &amp; payouts</Link>
                    <Link>Notifications</Link>
                    <Link>Listings</Link>
                    <Link>Trips</Link>
                </div>
                <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default UserAccount;