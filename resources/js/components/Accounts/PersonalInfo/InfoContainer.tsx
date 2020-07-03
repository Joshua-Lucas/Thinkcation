import React, { FormEvent, FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";

interface IInfoContainerProps {
    inputType: string;
    title: string;
    details: string;
    submitEdit: FormEventHandler;
}

const InfoContainer: React.FC<IInfoContainerProps> = ({
    inputType,
    title,
    details,
    submitEdit,
}) => {
    const [editing, setEditing] = useState(false);
    const toggleEditing = () => {
        setEditing(!editing);
    };
    return (
        <div>
            <h5>{title}</h5>
            <p>{details}</p>

            <form
                className={editing === true ? "block" : "hidden"}
                onSubmit={submitEdit}
            >
                <label htmlFor={title}>name</label>
                <input id={title} type={inputType} placeholder={details} />
                <button type="submit">Save</button>
            </form>
            <div>
                <button
                    className={editing === false ? "block" : "hidden"}
                    onClick={toggleEditing}
                >
                    Edit
                </button>
                <button
                    className={editing === true ? "block" : "hidden"}
                    onClick={toggleEditing}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};
export default InfoContainer;
