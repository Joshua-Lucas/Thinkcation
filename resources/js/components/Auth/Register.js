import React, {useReducer} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const Register = () => 
{
    let history = useHistory();
    // Form entry data
    const initialState = {
        firstname: "",
        lastname: "",
        birthday: "",
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

    const {firstname, lastname, birthday, email, password,password_confirmation, rating } = state

    // Event Handlers
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
        <div className="flex flex-col justify-center items-center m-auto mt-40 rounded-lg shadow-xl w-1/5 bg-white">
            <h1 className="pt-8 pb-4 " >Signup</h1>
            <form  className="flex flex-col justify-center items-center w-full pb-8" onSubmit={handleRegister}>
                    <input 
                        className="auth-input auth-input:focus "
                        type="text"
                        placeholder="First Name"
                        name="firstname" 
                        value={firstname}  
                        onChange={handleChange}
                     />

                    <input 
                        className="border-2 p-2 w-5/6 "
                        type="text"
                        placeholder="Last Name"
                        name="lastname" 
                        value={lastname}  
                        onChange={handleChange}
                     />                     
                    <p className="text-xs pt-1 w-5/6 font-thin text-lightaccent">Make sure it matches your goverment ID</p>
                    <input 
                        className="border-2 p-2 mt-6 w-5/6"
                        type="date"
                        placeholder="Birthday"
                        name="birthday" 
                        value={birthday}  
                        onChange={handleChange}
                     /> 
                    <p className="text-xs pt-1 w-5/6 mb-8 font-thin text-lightaccent">To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Thinkinn.</p>  

                    <input 
                        className="border-2 p-2  w-5/6"
                        type="email"
                        placeholder="email"
                        name="email" 
                        value={email}  
                        onChange={handleChange}
                     />
                    <p className="text-xs pt-1 w-5/6 mb-8 font-thin text-lightaccent">Make sure it matches your goverment ID</p>
                    <input 
                        className="border-2 p-2 w-5/6"
                        type="password"
                        placeholder="password"
                        name="password" 
                        value={password}  
                        onChange={handleChange}
                    />
        
                    <input 
                        className="border-2 p-2 w-5/6"
                        type="password"
                        placeholder="confirm password"
                        name="password_confirmation" 
                        value={password_confirmation}  
                        onChange={handleChange}
                    />
        

                <button className="w-1/3 p-2 mt-8 rounded borader-2 bg-brand hover:bg-darkshade hover:text-lightshade  " type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Register;