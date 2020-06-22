import React, { useState, useEffect, FunctionComponent } from "react";
import axios from "axios";

const ShowInn: FunctionComponent = () => {
    const [inn, setInn] = useState<any>([]);

    const apiUrl = "/api" + window.location.pathname;

    useEffect(() => {
        axios.get(apiUrl).then((res) => {
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
