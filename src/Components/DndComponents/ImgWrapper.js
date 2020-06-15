import React, { useState, useEffect } from 'react';

const ImgWrapper = ({ activeTargets, isToggled, isSubmitted, children }) => {

    const [imgOverlaySrc, setImgOverlaySrc] = useState("")
    const [gifOverlaySrc, setGifOverlaySrc] = useState("1h1s1")
    useEffect(() => {
        console.log(activeTargets)
        setImgOverlaySrc(`${activeTargets.low}_${activeTargets.high}`)
        setGifOverlaySrc(`${activeTargets.low}_${activeTargets.high}_${activeTargets.hurricane}`)
    }, [activeTargets, isSubmitted])

    return (
        <div className="img-wrapper">
            <img
                src="./graphics/movncane_base.jpg"
                alt=""
                className="img-background"
            />
            <img
                src={`./graphics/${imgOverlaySrc}.png`}
                alt=""
                className="img-overlay"
                style={imgOverlaySrc && isToggled && activeTargets.hurricane ? { visibility: "visible" } : { visibility: "hidden" }}
            />
            {gifOverlaySrc && isSubmitted ? (
                <div className="animated-gif">
                    <img
                        src={`./graphics/${gifOverlaySrc}.gif`}
                        alt=""

                    />
                </div>
            ) : (
                    null
                )
            }
            {children}
        </div>
    );
}

export default ImgWrapper;