import React from "react";
import ServerError from "./ServerError";
import TeapotError from "./TeaPotError";
import UnknownStatusError from "./UnknownStatusError";

interface ResultDisplayProps {
    data: { name: string } | undefined;
    status: number | null;
    error: Error | undefined;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ data, status, error }) => {
    if (error) {
        return <ServerError error={error as Error} />;
    } else {
        switch (status) {
            case 500:
                return <ServerError />;
            case 418:
                return <TeapotError />;
            case 200:
                if (data) {
                    return (
                        <div>
                            <p>{status}</p>
                        </div>
                    );
                } else {
                    return <div>{"data undefined"}</div>;
                }

            default:
                return <UnknownStatusError />;
        }
    }
};

export default ResultDisplay;
