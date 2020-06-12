import React, {useState, useReducer} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Error from '../../../icon-exclamation.svg';
import RegistrationErrors from './errors/RegistrationErrors.js';

const Register = () => 
{
    let history = useHistory();
    const [ofAge,setOfAge] = useState(true);
    const [error,setError] = useState (false);
    const [errorEmail,setErrorEmail] = useState('');
    const [errorPassword,setErrorPassword] = useState("");
  
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
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/register', state)
            .then(() => {
                history.push('/login')
            })
            .catch(handleErrors)
        });
    }
    const handleBdayValdidation = () => 
    {
        let ageRestriction = 18;
        // convert Bday to Date object
        let year = parseInt(birthday.slice(0,4));
        let month = parseInt(birthday.slice(6,8)) - 1;
        let day = parseInt(birthday.slice(8,10));
        let birthDate = new Date (year, month, day);
        
        let currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - ageRestriction);
        
        if ((currentDate - birthDate) < 0 )
        {
            return setOfAge(false);
        } 
            return setOfAge(true);
        
    
    }
    const handleErrors = (err) =>  
    {
        if(err.response)
        {
            // check for email error
            if(err.response.data.errors.email !== undefined)
            {
                setErrorEmail(err.response.data.errors.email[0])
            } else
            {
                setErrorEmail('')
            }    
            // check for password error
            if(err.response.data.errors.password !== undefined)
            {
                setErrorPassword(err.response.data.errors.password[0])
            } else
            {
                setErrorPassword('')
            }
            setError(true)
        }
    }
    return (
        <div className="flex flex-col justify-center items-center m-auto my-20 rounded-lg shadow-xl w-11/12 bg-white md:w-3/4 lg:w-2/4 xl:w-2/6 2xl:w-1/5">
            <h1 className="pt-8 pb-4 " >Signup</h1>
            <div className={!error ? 'hidden' : 'block w-5/6 '}>
                    <RegistrationErrors 
                        emailError={errorEmail} 
                        passwordError={errorPassword}
                    />
            </div>
            <form  className="flex flex-col justify-center items-center w-full pb-8" onSubmit={handleRegister}>
                    <input 
                        className="auth-input auth-input:focus"
                        type="text"
                        placeholder="First Name"
                        name="firstname" 
                        value={firstname}  
                        onChange={handleChange}
                        required
                     />

                    <input 
                        className="auth-input auth-input:focus"
                        type="text"
                        placeholder="Last Name"
                        name="lastname" 
                        value={lastname}  
                        onChange={handleChange}
                        required
                     />                     
                    <p className="text-xs pt-1 w-5/6 font-thin text-lightaccent">Make sure it matches your goverment ID</p>
                    <input 
                        className="auth-input auth-input:focus mt-6 "
                        type="date"
                        placeholder="Birthday"
                        name="birthday" 
                        value={birthday}  
                        onChange={handleChange}
                        onBlur={handleBdayValdidation}
                        required
                     /> 
                    { ofAge 
                        ? <p className="text-xs pt-1 w-5/6 mb-8 font-thin text-lightaccent">To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Thinkcation.</p> 
                        :  
                            <div className="flex pt-1 w-5/6 mb-8">
                                <img className="w-8 h-8 self-center"src={Error} alt='exclamation'></img>
                                <p className="text-xs pl-1 font-thin text-darkaccent">You must be 18 or older to use Thinkcation. Other people won’t see your birthday.</p> 
                             </div>
                    }

                    <input 
                        className="auth-input auth-input:focus "
                        type="email"
                        placeholder="email"
                        name="email" 
                        value={email}  
                        onChange={handleChange}
                        required
                     />
                    <p className="text-xs pt-1 w-5/6 mb-8 font-thin text-lightaccent">Make sure it matches your goverment ID</p>
                    <input 
                        className="auth-input auth-input:focus "
                        type="password"
                        placeholder="password"
                        name="password" 
                        value={password}  
                        onChange={handleChange}
                        required
                        minLength="8"
                    />
        
                    <input 
                        className="auth-input auth-input:focus "
                        type="password"
                        placeholder="confirm password"
                        name="password_confirmation" 
                        value={password_confirmation}  
                        onChange={handleChange}
                        required
                    />
        

                <button className="w-2/3 p-2 mt-8 rounded borader-2 bg-brand hover:bg-darkshade hover:text-lightshade lg:w-5/6" type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Register;