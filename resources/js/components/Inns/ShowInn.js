import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const ShowInn = () => 
{

    const [inn, setInn] = useState([]);

    const apiUrl = '/api' + window.location.pathname;

    useEffect(() => {  
        let url = location.href;
        Axios
            .get(apiUrl)
            .then(res => {setInn(res.data)});
      }, [] );


    
    return (
        <div>
            <h1>{inn.title}</h1>
            

        </div>
    );
}

export default ShowInn;