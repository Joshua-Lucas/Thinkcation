import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BrowseInns from './Inns/BrowseInns.js';
import ShowInn from './Inns/ShowInn.js';


const App = () =>  {
    return (
        <BrowserRouter>
            <div className="">
                <Switch>
                    <Route exact path="/"></Route>
                    <Route  exact path="/inns"> 
                        <BrowseInns/>
                    </Route>
                    <Route  path="/inns/:innid"> 
                        <ShowInn/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;