import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const BrowseInns = () => 
{

    const [inns, setInns] = useState([]);
    useEffect(() => {  
        Axios
            .get('api/inns')
            .then(res => {setInns = res.data});
      });

    return (
        <div>
            <h1>Test</h1>
            <ul>
    {inns.map(inn => <li>{inn.title}</li> )}
            </ul>
        </div>
    );
}

export default BrowseInns;