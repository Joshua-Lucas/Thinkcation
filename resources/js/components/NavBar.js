import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Axios from 'axios';


const NavBar = () => 
{

    const [user,setUser] = useState ([]);
    
    useEffect(() => {  
        Axios
            .get('api/user')
            .then(res => {setUser(res.data)})
            .catch(function (error) {
                console.log(error);
              })
              .then( setUser('Unathorized'));
      }, [] );

    return (
        <div>   
            <Link to="/HostHome">Host your home</Link>

            { user === 'Unathorized' ? <Link to="/login">Login</Link> : <Link to="/dashboard">{user.name}</Link>}
        </div>
    );

}

export default NavBar;