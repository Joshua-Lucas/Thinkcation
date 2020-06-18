import React from "react";

const NoAccountError = () => {
    return (
        <div className=" flex items-center my-4 py-4 px-2 bg-red-100 border-t-4 border-darkaccent rounded-md w-full">
            <div className=" text-darkaccent items-center">
                <svg
                    className=" fill-current w-10 h-10 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
            </div>
            <div className="flex flex-col pl-3">
                <h6 className="text-darkaccent"> Let's try that again</h6>
                <p className="text-xs font-light">
                    Incorrect email or password
                </p>
            </div>
        </div>
    );
};

export default NoAccountError;
