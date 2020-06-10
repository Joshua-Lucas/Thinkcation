import React, { useEffect, useState } from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import Axios from 'axios';

const UserDashboard = () => 
{
    let history = useHistory();
    const [user,setUser] = useState ([]);
    
    useEffect(() => {  
        Axios
            .get('api/user')
            .then(res => setUser(res.data));
      }, [] );

    const handleLogout = () => 
    {
        Axios.post('/logout').then( res => {
            history.push('/login')
        })
    }

    return(
        <div>
            <h1>{user.firstname}'s Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default UserDashboard;