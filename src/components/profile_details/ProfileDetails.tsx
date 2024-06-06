import React from 'react';
import "./ProfileDetails.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface ProfileDetailsProps {
    name: string;
    userClass: string;
    subscription: {
        active: boolean;
        startDate: string;
        endDate: string;
    };
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ name, userClass, subscription }) => {
    return (
        <div className="profile-details-wrapper">
            <div className="user-info">
                <AccountCircleIcon className="avatar-p" style={{ fontSize: '180px' }} />
                <div className="info-fields">
                    <div className="info-field">
                        <label className="text-p">ФИО</label>
                        <input type="text" className="text-input" value={name} readOnly />
                    </div>
                    <div className="info-field">
                        <label className="text-p">Класс</label>
                        <input type="text" className="text-input" value={userClass} readOnly />
                    </div>
                </div>
            </div>
            <div className={`subscription-info ${!subscription.active ? 'no-subscription' : ''}`}>
                <h3 className="text-sub">Подписка</h3>
                {subscription.active ? (
                    <div className="subscription-active">
                        <button className="active-button">Активна</button>
                        <h3 className="text-sub">Сроки</h3>
                        <div className="date-field">
                            <input type="text" className="text-input" value={subscription.startDate} readOnly />
                        </div>
                        <div className="date-field">
                            <input type="text" className="text-input" value={subscription.endDate} readOnly />
                        </div>
                    </div>
                ) : (
                    <button className="subscribe-button">Подписаться</button>
                )}
            </div>
        </div>
    );
};

export default ProfileDetails;
