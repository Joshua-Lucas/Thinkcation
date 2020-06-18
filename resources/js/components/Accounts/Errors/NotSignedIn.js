import React from "react";
import { Link } from "react-router-dom";
import Searching from "../../../../searching.svg";

const NotSignedIn = () => {
    return (
        <div className="flex flex-col items-center mt-12 lg:mt-20 xl:flex-row xl:justify-center xl:my-20 ">
            <img
                className="w-11/12 xl:w-1/3"
                src={Searching}
                alt="searching for user"
            ></img>
            <div className=" w-11/12 flex flex-col items-center xl:self-center xl:w-1/3 xl:pl-8">
                <h1 className="text-4xl text-center 2xl:text-5xl">
                    <span className="block text-6xl xl:pr-1 ">Oops!</span>
                    Looks like you are not logged in.{" "}
                </h1>
                <p className="pt-4 ">try one of these</p>
                <div className=" pt-8 space-x-4">
                    <Link
                        className="py-3 px-4 rounded-full borader-2 bg-brand hover:bg-darkshade hover:text-lightshade "
                        to="/signup"
                    >
                        Signup
                    </Link>
                    <Link
                        className="py-3 px-4  rounded-full borader-2 bg-brand hover:bg-darkshade hover:text-lightshade"
                        to="/login"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotSignedIn;
