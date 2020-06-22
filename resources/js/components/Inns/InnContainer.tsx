import React from "react";

interface InnContainerProps {
    key: number;
    title: string;
    location: string;
    price: string;
    rating: number;
}

const InnContainer: React.FC<InnContainerProps> = ({
    key,
    title,
    location,
    price,
    rating,
}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{rating}</p>
            <p>{location}</p>
            <p>{price}/ night </p>
        </div>
    );
};
export default InnContainer;
