import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [dropdownDirection, setDropdownDirection] = useState('down');
    const dropdownRef = useRef(null);

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
        if (dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.bottom > windowHeight) {
                setDropdownDirection('up');
            } else {
                setDropdownDirection('down');
            }
        }
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
        setDropdownDirection('down');
    };

    const menus = {
        Математика: ['5 класс', '6 класс', '7 класс', '8 класс', '9 класс', '10 класс', '11 класс'],
        Алгебра: ['7 класс', '8 класс', '9 класс', '10 класс', '11 класс'],
        Геометрия: ['7 класс', '8 класс', '9 класс', '10 класс', '11 класс'],
        Информатика: ['7 класс', '8 класс', '9 класс', '10 класс', '11 класс'],
        ОГЭ: ['математика', 'информатика'],
        ЕГЭ: ['математика (база)', 'математика (профиль)', 'информатика'],
        ГДЗ: ['математика', 'алгебра', 'геометрия', 'информатика']
    };

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
                        {Object.keys(menus).map((menu) => (
                            <li
                                key={menu}
                                onMouseEnter={() => handleMouseEnter(menu)}
                                onMouseLeave={handleMouseLeave}
                                className="dropdown-container"
                            >
                                {menu}
                                {activeMenu === menu && (
                                    <div className={`dropdown-menu ${dropdownDirection}`} ref={dropdownRef}>
                                        {menus[menu].map((item, index) => (
                                            <div key={index} className="dropdown-item">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
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
