import React, { useState, useEffect } from 'react';

const ImgWrapper = ({ activeTargets, children }) => {

    const [imgSrc, setImgSrc] = useState("")
    useEffect(() => {
        console.log(activeTargets)
        setImgSrc(`${activeTargets.low}_${activeTargets.high}`)
    }, [activeTargets])

    return (
        <div className="img-wrapper">
            <img
                src="./graphics/movncane_base.jpg"
                alt=""
                className="img-background"
            />
            <img
                src={`./graphics/${imgSrc}.png`}
                alt=""
                className="img-overlay"
                style={imgSrc && activeTargets.hurricane ? { visibility: "visible" } : { visibility: "hidden" }}
            />
            {children}
        </div>
    );
}

export default ImgWrapper;