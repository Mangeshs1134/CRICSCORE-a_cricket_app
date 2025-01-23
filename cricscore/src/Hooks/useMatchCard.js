// Match card from backend using making of custom hooks
import { useState, useEffect } from "react";


const BaseUrl = 'http://127.0.0.1:8000/'

const useFetchMatch = () => {
    const [allMatch, setAllMatch] = useState([]);
    const [error, setError] = useState(null);


useEffect(() => {
    const fetchMatch = async () => {
        try {
            const res = await fetch(`${BaseUrl}match/`);
            if (res.ok) {
                const data = await res.json();
                setAllMatch(data);
            } else {
                setError('Failed to fetch news');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    fetchMatch();
}, []);

return { allMatch, error };
};

export const Match =  useFetchMatch;