import React from 'react';
import axios from 'axios';


const Login = () => 
{

    const handleLogin = (e) => 
    {
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/login', {
                email: '',
                password: ''
            })
            .then(response => console.log(response))
        });
    }

    return (
        <div className="">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label>Email
                    <input type="email" name="email" placeholder="email"/>
                </label>

                <label>Password
                    <input type="password" name="password" placeholder="password"/>
                </label>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;