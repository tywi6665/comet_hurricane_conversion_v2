import React, { useState } from 'react';

const useModal = () => {

    const [isShowing, setIsShowing] = useState(false);
    const [modalData, setModalData] = useState("");

    function toggle(e) {
        let element = e.target.getAttribute("data");
        if (element === "directions") {
            setModalData({
                heading: "How to Aim a Hurricane",
                text: "Click and drag the red low (L) onto a low target over the United States, the blue high (H) onto a high target over the Atlantic Ocean, and the animated hurricane onto either starting location target over the Atlantic Ocean. When all three are positioned, a Start button will appear at left. Click it to see the storm track for that combination."
            });
            setIsShowing(!isShowing);
        } else if (element === "credits") {
            setModalData({
                heading: "Credits",
                text: 'The "Aim a Hurricane" simulator was built using the research and data of Dr. Mark DeMaria, NOAA/NESDIS/ORA.'
            });
            setIsShowing(!isShowing);
        } else if (element === "close") {
            setModalData("");
            setIsShowing(!isShowing);
        }

    }

    return {
        isShowing,
        toggle,
        modalData
    };
};

export default useModal;