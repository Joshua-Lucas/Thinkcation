import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserAccount from './Useraccount.js';
import UserProfile from './UserProfile.js';
import UserListings from './UserListings.js';
import PageNotFound from '../PageNotFound.js';



const AccountSettings = () =>  {

    return(
        <div>
        <h1>This is the nav bar</h1>
        <Switch>
            <Route exact path="/account">
                <UserAccount />
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