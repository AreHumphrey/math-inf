import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import Dropdown from './Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    useEffect(() => {
        if (dropdownRef.current) {
            const parentWidth = dropdownRef.current.parentElement.offsetWidth;
            dropdownRef.current.style.width = `${parentWidth}px`;
        }
    }, [showDropdown]);

    return (
        <>
            <div className="header-bg">
                <div className="header-text">
                    <div className="left-text">МАТЕМАТИКА</div>
                    <div className="right-text">ИНФОРМАТИКА</div>
                </div>
            </div>
            <header className="header">
                <nav className="header-nav">
                    <ul>
                        <li>Главная</li>
                        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="dropdown-container">
                            Математика
                        </li>
                        <li>Алгебра</li>
                        <li>Геометрия</li>
                        <li>Информатика</li>
                        <li>ОГЭ</li>
                        <li>ЕГЭ</li>
                        <li>ГДЗ</li>
                    </ul>
                </nav>
                <div className="profile-icon">
                    <a href="/profile"><AccountCircleIcon /></a>
                </div>
            </header>
        </>
    );
};

export default Header;
