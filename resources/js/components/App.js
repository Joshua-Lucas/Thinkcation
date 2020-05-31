import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BrowseInns from './Inns/BrowseInns.js';


const App = () =>  {
    return (
        <BrowserRouter>
            <div className="">
                <Switch>
                    <Route exact path="/"></Route>
                    <Route  path="/inns"> <BrowseInns/> </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;