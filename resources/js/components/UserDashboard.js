import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const UserDashboard = () => 
{
    
    const [user,setUser] = useState ([]);
    
    useEffect(() => {  
        Axios
            .get('api/user')
            .then(res => {setUser(res.data)});
      }, [] );

    return(
        <div>
            <h1>{user.name}'s Dashboard</h1>
        </div>
    );
}

export default UserDashboard;