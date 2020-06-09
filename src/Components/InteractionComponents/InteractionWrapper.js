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
                            <p>ITEM 1</p>
                        </div>
                    </div>
                    <div className="dnd-item">
                        <div>
                            <p>ITEM 2</p>
                        </div>
                    </div>
                    <div className="dnd-item">
                        <div>
                            <p>ITEM 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InteractionWrapper;