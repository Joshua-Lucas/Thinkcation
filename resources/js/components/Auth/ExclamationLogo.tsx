import React from "react";

interface IExclamationLogoProps {
    cssStyle: string;
}

const ExclamationLogo: React.FC<IExclamationLogoProps> = ({ cssStyle }) => {
    return (
        <React.Fragment>
            <svg
                className={cssStyle}
                fill="#a5454a"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
            </svg>
        </React.Fragment>
    );
};
export default ExclamationLogo;
