import React, { useState, useEffect } from 'react';

const ImgWrapper = ({ activeTargets, isToggled, isSubmitted, children }) => {

    const [imgOverlaySrc, setImgOverlaySrc] = useState("")
    const [gifOverlaySrc, setGifOverlaySrc] = useState("")
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
            <div className="img-overlay-container">
                <img
                    src={`./graphics/${imgOverlaySrc}.png`}
                    alt=""
                    className="img-overlay"
                    style={imgOverlaySrc && isToggled && activeTargets.hurricane ? { visibility: "visible" } : { visibility: "hidden" }}
                />
            </div>
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