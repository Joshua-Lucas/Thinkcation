import React, {useReducer} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Login = () => 
{
    let history = useHistory();
    // Form entry data
    const initialState = {
        name: "",
        email: "",
        password: "",
        password_confirmation:""
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

    const { name,email, password,password_confirmation } = state

    
    const handleRegister = (e) => 
    {
        e.preventDefault();
        axios.post('/register', {
            state
            })
        .then(() => {
                history.push('/dashboard')
            })
    }

    return (
        <div className="flex flex-col justify-center">
            <h1>Login</h1>
            <form onSubmit={handleRegister}>
            <label>Name
                    <input 
                        type="name"
                        placeholder="name"
                        name="name" 
                        value={name}  
                        onChange={handleChange}
                     />
                </label>

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

                <label>Confirm Password
                    <input 
                        type="password"
                        placeholder="confirm password"
                        name="password_confirmation" 
                        value={password_confirmation}  
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Login;