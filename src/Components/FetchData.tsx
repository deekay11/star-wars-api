import { useState, useEffect } from "react";

interface FetchResult<T> {
    data: T | undefined;
    error: unknown;
    isFetching: boolean;
    status: number | null;
}

function FetchData<T>(url: string): FetchResult<T> {
    const [data, setData] = useState<T | undefined>(undefined);
    const [error, setError] = useState<unknown>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [status, setStatus] = useState<number | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                setIsFetching(false);
                setStatus(response.status);

                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                } else {
                    throw new Error(response.statusText);
                }
            } catch (e) {
                setIsFetching(false);
                setError(e);
            }
        }

        fetchData();
    }, [url]);

    return {
        data,
        error,
        isFetching,
        status,
    };
}

export default FetchData;
