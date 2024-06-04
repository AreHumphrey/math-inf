import React from 'react';
import './Subscription.css';

const Subscription = () => {
    return (
        <div className="subscription-container">
            <div className="subscription-content">
                <div className="subscription-text">
                    <h3>Хотите больше возможностей?</h3>
                    <p>Оформляйте подписку</p>
                </div>
                <button className="subscription-button">Подписаться</button>
            </div>
        </div>
    );
};

export default Subscription;
