import React from 'react';

const InteractionWrapper = () => {
    return (
        <div className="interaction-wrapper">
            <div className="img-wrapper">
                <img src="./graphics/sample.jpg" alt="" />
            </div>
            <div className="drag-n-drop">
                <div className="dnd-group dnd-draggables-container">
                    <div className="dnd-item">
                        <div>
                            <p>ITEM L</p>
                        </div>
                    </div>
                    <div className="dnd-item">
                        <div>
                            <p>ITEM H</p>
                        </div>
                    </div>
                    <div className="dnd-item">
                        <div>
                            <p>ITEM 3</p>
                        </div>
                    </div>
                </div>
                <div className="dnd-group dnd-target dnd-target-low-1">
                </div>
                <div className="dnd-group dnd-target dnd-target-low-2">
                </div>
                <div className="dnd-group dnd-target dnd-target-low-3">
                </div>
                <div className="dnd-group dnd-target dnd-target-low-4">
                </div>
                <div className="dnd-group dnd-target dnd-target-high-1">
                </div>
                <div className="dnd-group dnd-target dnd-target-high-2">
                </div>
                <div className="dnd-group dnd-target dnd-target-high-3">
                </div>
                <div className="dnd-group dnd-target dnd-target-high-4">
                </div>
                <div className="dnd-group dnd-target dnd-target-hurricane-1">
                </div>
                <div className="dnd-group dnd-target dnd-target-hurricane-2">
                </div>
            </div>
        </div>
    );
}

export default InteractionWrapper;