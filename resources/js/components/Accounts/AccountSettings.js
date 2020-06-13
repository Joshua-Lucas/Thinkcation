import React, {useState, useEffect} from 'react';
import { Switch, Route, useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserAccount from './Useraccount.js';
import UserProfile from './UserProfile.js';
import UserListings from './UserListings.js';
import PageNotFound from '../PageNotFound.js';
import NotSignedIn from './Errors/NotSignedIn.js';



const AccountSettings = () =>  {
   
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
            <h1>This is the nav bar</h1>
        <Switch>
            <Route exact path="/account">
                { error
                    ?
                    <NotSignedIn />
                    :
                    <UserAccount user={user} handleLogout={handleLogout}/>
                }
            </Route>
            <Route exact path="/account/profile">
                    <UserProfile />
            </Route>
            <Route exact path="/account/listings">
                <UserListings />
            </Route>
            <Route path='/account/*'>
                        <PageNotFound />
            </Route>

        </Switch>
        </div>
    );
}

export default AccountSettings;