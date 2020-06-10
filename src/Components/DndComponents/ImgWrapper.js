import React, { useState, useEffect } from 'react';

const ImgWrapper = ({ activeTargets }) => {

    const [imgSrc, setImgSrc] = useState("")
    useEffect(() => {
        console.log(activeTargets)
    }, [activeTargets])

    return (
        <div className="img-wrapper">
            <img
                src="./graphics/sample.jpg"
                alt=""
                className="img-background"
            />
            {imgSrc ? (
                <img
                    src={`./graphics/${imgSrc}.jpg`}
                    alt=""
                    className="img-overlay"
                />
            ) : null}

        </div>
    );
}

export default ImgWrapper;