import React, {useReducer} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Register = () => 
{
    let history = useHistory();
    // Form entry data
    const initialState = {
        name: "",
        email: "",
        password: "",
        password_confirmation:"",
        rating: 0
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

    const {name, email, password,password_confirmation, rating } = state

    
    const handleRegister = (e) => 
    {
        e.preventDefault();
        console.log(state)
        axios.get('/sanctum/csrf-cookie')
            .then(
            axios.post('/register', state)
            )  
            .then(() => {
                history.push('/login')
            })
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Register</h1>
            <form  className="flex flex-col justify-center items-center w-1/3"onSubmit={handleRegister}>
                <label className="flex flex-col w-full py-4 ">Name
                    <input 
                        className="border-2 "
                        type="name"
                        placeholder="name"
                        name="name" 
                        value={name}  
                        onChange={handleChange}
                     />
                </label>

                <label className="flex flex-col w-full py-4 ">Email
                    <input 
                        className="border-2 "
                        type="email"
                        placeholder="email"
                        name="email" 
                        value={email}  
                        onChange={handleChange}
                     />
                </label>

                <label className="flex flex-col w-full py-4 ">Password
                    <input 
                        className="border-2 "
                        type="password"
                        placeholder="password"
                        name="password" 
                        value={password}  
                        onChange={handleChange}
                    />
                </label>

                <label className="flex flex-col w-full py-4 ">Confirm Password
                    <input 
                        className="border-2 "
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

export default Register;