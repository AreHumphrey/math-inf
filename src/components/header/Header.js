import React, {useState, useRef, useEffect} from 'react';
import './Header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [dropdownDirection, setDropdownDirection] = useState('down');
    const [activeSubmenu, setActiveSubmenu] = useState(null);
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
        setActiveSubmenu(null);
        setDropdownDirection('down');
    };

    const handleSubmenuEnter = (submenu) => {
        setActiveSubmenu(submenu);
    };

    const handleSubmenuLeave = () => {
        setActiveSubmenu(null);
    };

    const menus = {
        Математика: ['5 класс', '6 класс', '7 класс', '8 класс', '9 класс', '10 класс', '11 класс'],
        Алгебра: ['7 класс', '8 класс', '9 класс', '10 класс', '11 класс'],
        Геометрия: ['7 класс', '8 класс', '9 класс', '10 класс', '11 класс'],
        Информатика: ['7 класс', '8 класс', '9 класс', '10 класс', '11 класс'],
        ОГЭ: ['математика', 'информатика'],
        ЕГЭ: ['математика (база)', 'математика (профиль)', 'информатика'],
        ГДЗ: {
            математика: ['5 класс', '6 класс'],
            алгебра: ['7 класс', '8 класс', '9 класс', '10 класс', '11 класс'],
            геометрия: ['7 класс', '8 класс', '9 класс', '10 класс', '11 класс'],
            информатика: ['7 класс', '8 класс', '9 класс', '10 класс', '11 класс']
        }
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
                                        {typeof menus[menu] === 'object' && !Array.isArray(menus[menu])
                                            ? Object.keys(menus[menu]).map((submenu, index) => (
                                                <div
                                                    key={index}
                                                    className="dropdown-item"
                                                    onMouseEnter={() => handleSubmenuEnter(submenu)}
                                                    onMouseLeave={handleSubmenuLeave}
                                                >
                                                    {submenu}
                                                    {activeSubmenu === submenu && (
                                                        <div className="dropdown-submenu">
                                                            {menus[menu][submenu].map((item, subIndex) => (
                                                                <div key={subIndex} className="dropdown-subitem">
                                                                    {item}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))
                                            : menus[menu].map((item, index) => (
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
                    <a href="/profile"><AccountCircleIcon/></a>
                </div>
            </header>
        </>
    );
};

export default Header;
