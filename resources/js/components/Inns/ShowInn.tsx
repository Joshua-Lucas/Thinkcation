import React, { useState, useEffect, FunctionComponent } from "react";
import Axios from "axios";

const ShowInn: FunctionComponent = () => {
    const [inn, setInn] = useState([]);

    const apiUrl = "/api" + window.location.pathname;

    useEffect(() => {
        Axios.get(apiUrl).then((res) => {
            setInn(res.data);
        });
    }, []);

    return (
        <div>
            <h1>{inn.title}</h1>
        </div>
    );
};

export default ShowInn;
