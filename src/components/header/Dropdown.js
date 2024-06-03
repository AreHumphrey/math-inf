import React from 'react';
import './Dropdown.css';

const Dropdown = ({ items }) => {
    return (
        <div className="dropdown-menu">
            {items.map((item, index) => (
                <div key={index} className="dropdown-item">
                    {item}
                </div>
            ))}
        </div>
    );
};

export default Dropdown;
