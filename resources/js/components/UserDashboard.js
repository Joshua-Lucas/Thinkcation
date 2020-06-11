import React, { useEffect, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import Axios from 'axios';
import Searching from '../../searching.svg';

const UserDashboard = () => 
{
    let history = useHistory();
    const [user,setUser] = useState ([]);
    const [error,setError] = useState (false);
    
    useEffect(() => {  
        Axios
            .get('api/user')
            .then(res => setUser(res.data))
            .catch(handleErrors);
      }, [] );

    const handleLogout = () => 
    {
        Axios.post('/logout').then( res => {
            history.push('/login')
        })
    }

    const handleErrors = (err) =>  
    {
        if(err.response)
        {
            setError(true)
        }
    }

    return(
        <div>
            {error === false 
            ? 
            <React.Fragment>
                <h1>{user.firstname}'s Dashboard</h1>
                <button onClick={handleLogout}>Logout</button>
            </React.Fragment>
            :
            <React.Fragment>
                <div className='flex flex-col items-center mt-12 lg:mt-20 xl:flex-row xl:justify-center xl:my-20 '>
                    <img className='w-11/12 xl:w-1/3'src={Searching} alt="searching for user"></img>
                    <div className=" w-11/12 flex flex-col items-center xl:self-center xl:w-1/3 xl:pl-8">
                        <h1 className="text-4xl text-center 2xl:text-5xl">
                            <span className="block text-6xl xl:pr-1 ">Oops!</span>
                            Looks like you are not logged in. </h1>
                            <p className="pt-4 ">try one of these</p>
                        <div className=" pt-8 space-x-4">
                            <Link className='py-3 px-4 rounded-full borader-2 bg-brand hover:bg-darkshade hover:text-lightshade 'to="/signup">Signup</Link>
                            <Link className='py-3 px-4  rounded-full borader-2 bg-brand hover:bg-darkshade hover:text-lightshade'to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            }
        </div>
    );
}

export default UserDashboard;