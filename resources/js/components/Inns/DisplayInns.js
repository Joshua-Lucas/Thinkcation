import React from "react";
import { Switch, Route } from "react-router-dom";
import BrowseInns from "./BrowseInns.js";
import ShowInn from "./ShowInn.js";

const DisplayInns = () => {
    return (
        <Switch>
            <Route exact path="/inns">
                <BrowseInns />
            </Route>
            <Route exact path="/inns/:id">
                <ShowInn />
            </Route>
        </Switch>
    );
};

export default DisplayInns;
