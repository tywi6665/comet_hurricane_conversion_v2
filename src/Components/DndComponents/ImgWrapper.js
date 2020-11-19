import React, { useState, useEffect } from 'react';

const ImgWrapper = ({ activeTargets, isToggled, isSubmitted, children }) => {

    const [imgOverlaySrc, setImgOverlaySrc] = useState("")
    const [gifOverlaySrc, setGifOverlaySrc] = useState("")

    useEffect(() => {
        setImgOverlaySrc("")
        setGifOverlaySrc("")
        if (activeTargets.low && activeTargets.high) {
            setImgOverlaySrc(`./images/${activeTargets.low}_${activeTargets.high}.png`)
        }
        setGifOverlaySrc(`./images/${activeTargets.low}_${activeTargets.high}_${activeTargets.hurricane}.gif`)
    }, [activeTargets, isSubmitted])

    return (
        <div className="img-wrapper">
            <img
                src="./images/movncane_base.jpg"
                alt=""
                className="img-background"
            />
            <div className="img-overlay-container">
                <img
                    src={imgOverlaySrc}
                    alt=""
                    className="img-overlay"
                    style={imgOverlaySrc && isToggled && activeTargets.hurricane ? { opacity: "50%" } : { opacity: "0%" }}
                />
            </div>
            {gifOverlaySrc && isSubmitted ? (
                <div className="animated-gif">
                    <img
                        src={gifOverlaySrc}
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