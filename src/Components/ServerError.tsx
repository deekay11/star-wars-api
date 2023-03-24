import React from "react";

interface ServerErrorProps {
    error?: any;
}

const ServerError: React.FC<ServerErrorProps> = ({ error }) => {
    return (
        <div>
            <p>{error ? error.message : "Oops... something went wrong, try again🤕"}</p>
        </div>
    );
};

export default ServerError;
