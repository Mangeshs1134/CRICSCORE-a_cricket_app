// News from backend using making of custom hooks
import { useState, useEffect } from "react";

const BaseUrl = 'http://127.0.0.1:8000/'

const useFetchNews = () => {
    const [allNews, setAllNews] = useState([]);
    const [error, setError] = useState(null);


useEffect(() => {
    const fetchNews = async () => {
        try {
            const res = await fetch(`${BaseUrl}news/`);
            if (res.ok) {
                const data = await res.json();
                setAllNews(data);
            } else {
                setError('Failed to fetch news');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    fetchNews();
}, []);

return { allNews, error };
};

export const News =  useFetchNews;