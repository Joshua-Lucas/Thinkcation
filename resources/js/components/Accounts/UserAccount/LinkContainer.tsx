import React from "react";
import { Link } from "react-router-dom";

interface ILinkContainerProps {
    to: string;
    logo: React.ReactElement;
    title: string;
    description: string;
}

const LinkContainer: React.FC<ILinkContainerProps> = ({
    to,
    logo,
    title,
    description,
}) => {
    return (
        <React.Fragment>
            <Link
                className="flex flex-col items-center p-6 rounded-lg shadow-xl bg-white md:items-start"
                to={to}
            >
                {logo}

                <h6 className="text-sm text-center md:mb-2 lg:text-lg  ">
                    {title}
                    {/* personal info */}
                    <svg
                        className="hidden fill-current text-lightaccent w-6 h-6 md:inline"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                    </svg>
                </h6>
                <p className="hidden font-light text-sm md:block ">
                    {description}
                    {/* Provide personal details and how we can reach you */}
                </p>
            </Link>
        </React.Fragment>
    );
};
export default LinkContainer;
