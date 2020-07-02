import React, { useState, useReducer, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import UserInfoContext from "../Context/UserInforContext";
import NoAccountError from "./errors/NoAccountError";

const Login: React.FC = () => {
    const history = useHistory();
    const [error, setError] = useState(false);
    const { userInfo, setUserInfo } = useContext(UserInfoContext);

    // Form entry data
    const initialState = {
        email: "",
        password: "",
    };

    const reducer = (state, { field, value }) => {
        return {
            ...state,
            [field]: value,
        };
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        dispatch({ field: e.target.name, value: e.target.value });
    };

    const { email, password } = state;

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.get("/sanctum/csrf-cookie").then(() => {
            axios
                .post("/login", state)
                .then(() =>
                    axios
                        .get("/api/user")
                        .then((res) => setUserInfo(res.data))
                        .then(() => {
                            history.push("/account");
                        })
                )
                .catch(handleErrors);
        });
    };

    const handleErrors = (err: XMLHttpRequest) => {
        if (err.response) {
            console.log(err.response);
            setError(true);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center m-auto my-20 rounded-lg shadow-xl w-11/12 bg-white md:w-3/4 lg:w-2/4 xl:w-2/6 2xl:w-1/5">
            <h1 className="pt-8 pb-4">Login</h1>
            <div className={!error ? "hidden" : "block w-5/6 "}>
                <NoAccountError />
            </div>
            <form
                className="flex flex-col justify-center items-center w-full pb-8"
                onSubmit={handleLogin}
            >
                <input
                    className="auth-input auth-input:focus"
                    type="email"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
                />

                <input
                    className="auth-input auth-input:focus"
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                />

                <button
                    className="w-2/3 p-2 mt-4 rounded borader-2 bg-brand hover:bg-darkshade hover:text-lightshade lg:w-5/6 "
                    type="submit"
                >
                    Login
                </button>
                <p className="text-sm pt-4 font-thin w-5/6 ">
                    Don&#39;t have an account?
                    <Link
                        className="font-medium text-brand underline pl-1"
                        to="/signup"
                    >
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
