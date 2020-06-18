import React from "react";
import { Link } from "react-router-dom";
import Lost from "../../Lost.svg";

const PageNotFound = () => {
    return (
        <div className="flex flex-col-reverse items-center mt-12 lg:mt-20 xl:flex-row xl:justify-center xl:my-20">
            <div className="w-11/12 flex flex-col  xl:w-1/3 xl:pl-8">
                <h1 className="text-6xl font-bold">Oops!</h1>
                <h2 className="text-2xl pt-4">
                    We can't seem to find the page you are looking for.
                </h2>
                <div className="pt-8 flex flex-col space-y-1">
                    <h3 className="text-lg font-semibold pb-2">
                        Here are some hepful links
                    </h3>
                    <Link to="/">Home</Link>
                    <Link to="/inns">Serach For ThinkInn</Link>
                </div>
            </div>
            <div className="w-11/12 xl:w-1/3">
                <img src={Lost} alt="404 Not Found" />
            </div>
        </div>
    );
};

export default PageNotFound;
