import React from 'react';

const InteractionWrapper = () => {
    return (
        <div className="interaction-wrapper">
            <div className="img-wrapper">
                <img src="./graphics/sample.jpg" alt="" />
            </div>
            <div className="drag-n-drop">
                <div className="dnd-group">
                    <div className="dnd-item">
                        <div>
                            <p>Item</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InteractionWrapper;