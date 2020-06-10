import React from 'react';

const Button = ({ type, handleClick, text, active }) => {
    return (
        <button
            className="btn"
            type={type}
            onClick={(e) => handleClick(e)}
        >
            {text}
        </button>
    );
}

export default Button;
