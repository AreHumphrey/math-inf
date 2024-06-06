import React, { useEffect, useState } from 'react';
import './Profile.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProfileDetails from '../components/profile_details/ProfileDetails';
import Navigation from '../components/navigation/Navigation';
import { UserData } from './types';

const Profile = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [news, setNews] = useState([
        {
            title: "Новые правила ЕГЭ вступят в 2024 году",
            description: "Рособрнадзор планирует организовать пересдачу ЕГЭ с 23 мая: что еще изменится",
            url: "https://example.com/news/1"
        },
        {
            title: "Новые правила ЕГЭ вступят в 2024 году",
            description: "Рособрнадзор планирует организовать пересдачу ЕГЭ с 23 мая: что еще изменится",
            url: "https://example.com/news/1"
        },
        {
            title: "Новые правила ЕГЭ вступят в 2024 году",
            description: "Рособрнадзор планирует организовать пересдачу ЕГЭ с 23 мая: что еще изменится",
            url: "https://example.com/news/1"
        }
    ]);

    useEffect(() => {
        const testUserData: UserData = {
            name: "Иван Иванов",
            class: "10-А",
            subscription: {
                active: true,
                startDate: "01.01.2022",
                endDate: "31.12.2022"
            }
        };

        setTimeout(() => {
            setUserData(testUserData);
        }, 1000);
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }

    const { name, class: userClass, subscription } = userData;

    return (
        <div className="profile-container">
            <Header />
            <div className="profile-content">
                <Navigation />
                <div className="main-content">
                    <h2>Личный кабинет</h2>
                    <div className="profile-section">
                        <ProfileDetails
                            name={name}
                            userClass={userClass}
                            subscription={subscription}
                        />
                        <div className="ad-space">
                            <h3>Новости</h3>
                            {news.map((item, index) => (
                                <div key={index} className="news-item-p">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <a href={item.url}>Читать далее</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
