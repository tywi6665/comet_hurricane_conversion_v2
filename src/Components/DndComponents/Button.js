import React from 'react';

const Button = ({ type, handleClick, text, data, isSubmitted }) => {
    return (
        <button
            className="btn"
            type={type}
            onClick={(e) => handleClick(e)}
            disabled={type === "reset" ? (data.low || data.high || data.hurricane ? false : true) : (data.low && data.high && data.hurricane && !isSubmitted ? false : true)}
        >
            {text}
        </button>
    );
}

export default Button;
