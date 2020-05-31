import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const BrowseInns = () => 
{

    const [inns, setInns] = useState([]);
    useEffect(() => {  
        Axios
            .get('api/inns')
            .then(res => {setInns(res.data)});
      }, [] );


    return (
        <div>
            <h1>Browse Inns </h1>
            <ul>
                {inns.map(inn => <li><Link to={'/inns/'+ inn.id}>{inn.title} in {inn.state}</Link></li>)}
            </ul>
        </div>
    );
}

export default BrowseInns;