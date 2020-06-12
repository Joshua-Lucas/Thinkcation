import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import UserAccount from './Useraccount.js';
import UserProfile from './UserProfile.js';



const AccountSettings = () =>  {

    return(

            <Switch>
                <Route exact path="/account">
                    <UserAccount />
                </Route>
                <Route exact path="/account/:profile">
                    <UserProfile />
                </Route>

            </Switch>

    );
}

export default AccountSettings;