import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import DisplayInns from './Inns/DisplayInns.js';
import PageNotFound from './PageNotFound.js';


const App = () =>  {
    return (
        <BrowserRouter>
            <div className="">
                <Switch>
                    <Route exact path="/"></Route>
                    <Route   path="/inns"> 
                        <DisplayInns/>
                    </Route>
                    <Route path='/*'>
                        <PageNotFound />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;