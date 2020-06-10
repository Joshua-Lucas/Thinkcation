import React, { useReducer} from 'react';
import {Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';


const Login = () => 
{
    let history = useHistory();
    // Form entry data
    const initialState = {
        email: "",
        password: ""
    };

    const  reducer = (state, {field, value}) =>  {
        return {
            ...state,
            [field] : value 
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = e => 
    {
        dispatch({field :e.target.name, value: e.target.value})
    }

    const { email, password} = state

    
    const handleLogin = (e) => 
    {
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/login', state)
            .then(() => {
                history.push('/dashboard')
            })
        });
    }

    return (
        <div className="flex flex-col justify-center">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Email
                    <input 
                        type="email"
                        placeholder="email"
                        name="email" 
                        value={email}  
                        onChange={handleChange}
                     />
                </label>

                <label>Password
                    <input 
                        type="password"
                        placeholder="password"
                        name="password" 
                        value={password}  
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;