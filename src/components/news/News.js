import React, { useEffect, useState } from 'react';
import './News.css';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        // Замените URL на ваш API endpoint
        fetch('https://api.example.com/news')
            .then(response => response.json())
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    return (
        <div className="news-container">
            <div className="news-list">
                {news.map((item, index) => (
                    <div key={index} className="news-item">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">Читать далее</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
