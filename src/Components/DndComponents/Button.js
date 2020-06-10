import React from 'react';

const Button = ({ type, handleClick, text }) => {
    return (
        <button
            type={type}
            onClick={(e) => handleClick(e)}
        >
            {text}
        </button>
    );
}

export default Button;