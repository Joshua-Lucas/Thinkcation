import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const ShowInn = () => 
{

    const [places, setInns] = useState([]);

    const apiUrl = '/api' + window.location.pathname;

    useEffect(() => {  
        let url = location.href;
        Axios
            .get(apiUrl)
            .then(res => {setInns(res.data)});
      }, [] );


    
    return (
        <div>
            <h1>{places.title}</h1>
            

        </div>
    );
}

export default ShowInn;