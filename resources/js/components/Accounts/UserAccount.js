import React  from 'react';
import { Link } from 'react-router-dom';




const UserAccount = ({user,handleLogout}) => 
{

    const userName = `${user.firstname}  ${user.lastname}`;

    return(

        <div className="flex flex-col mx-auto  w-3/5">
                <div className="ml-4 my-16">
                    <h3 className='font-bold'>Account</h3>
                    <p>{userName},  {user.email} <Link className="text-darkaccent" to="/account/profile">Go to Profile</Link></p>
                </div>
                <div className=" w-full self-center grid grid-cols-3 gap-4 -mx-2 px-2 ">
                    <Link className="flex flex-col p-6 rounded-lg shadow-xl bg-white">
                    <svg 
                        className="mb-4 w-6 h-6 fill-current text-lightaccent"
                        viewBox="0 0 20 20">
                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z"/>
                    </svg>
                       
                        <h6 className="mb-2 text-lg">
                            Personal Info
                            <svg 
                                className='inline fill-current text-lightaccent w-6 h-6'
                                viewBox="0 0 20 20">
                                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                            </svg>
                        </h6>
                        <p className="font-light text-sm">Provide personal details and how we can reach you</p>
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