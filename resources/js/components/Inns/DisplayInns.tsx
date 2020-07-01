import React from "react";
import { Switch, Route } from "react-router-dom";
import BrowseInns from "./BrowseInns";
import ShowInn from "./ShowInn";

const DisplayInns: React.FC = () => {
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
