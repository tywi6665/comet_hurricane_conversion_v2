import React, { useState } from 'react';

const ImgWrapper = () => {
    return (
        <div className="img-wrapper">
            <img
                src="./graphics/sample.jpg"
                alt=""
                className="img-background"
            />
            <img
                src="./graphics/low1high1.jpg"
                alt=""
                className="img-overlay"
            />
        </div>
    );
}

export default ImgWrapper;