import React, { useEffect, useState } from 'react';
import './News.css';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        // Симулируем вызов API, используя статические данные
        const newsData = [
            {
                "title": "Новые правила ЕГЭ вступят в 2024 году",
                "description": "Рособрнадзор планирует организовать пересдачу ЕГЭ с 23 мая: что еще изменится",
                "url": "https://example.com/news/1"
            },
            {
                "title": "Новые правила ЕГЭ вступят в 2024 году",
                "description": "Рособрнадзор планирует организовать пересдачу ЕГЭ с 23 мая: что еще изменится",
                "url": "https://example.com/news/1"
            },
            {
                "title": "Новые правила ЕГЭ вступят в 2024 году",
                "description": "Рособрнадзор планирует организовать пересдачу ЕГЭ с 23 мая: что еще изменится",
                "url": "https://example.com/news/1"
            },
            {
                "title": "Новые правила ЕГЭ вступят в 2024 году",
                "description": "Рособрнадзор планирует организовать пересдачу ЕГЭ с 23 мая: что еще изменится",
                "url": "https://example.com/news/1"
            },
            {
                "title": "Новые правила ЕГЭ вступят в 2024 году",
                "description": "Рособрнадзор планирует организовать пересдачу ЕГЭ с 23 мая: что еще изменится",
                "url": "https://example.com/news/1"
            },
            {
                "title": "Новые правила ЕГЭ вступят в 2024 году",
                "description": "Рособрнадзор планирует организовать пересдачу ЕГЭ с 23 мая: что еще изменится",
                "url": "https://example.com/news/1"
            },
        ];

        setNews(newsData);
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
