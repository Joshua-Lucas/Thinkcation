import React from "react";
import { Switch, Route } from "react-router-dom";
import BrowseInns from "./BrowseInns.tsx";
import ShowInn from "./ShowInn.tsx";

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
