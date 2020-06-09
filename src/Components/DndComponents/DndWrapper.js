import React, { useRef } from 'react';

const DndWrapper = () => {

    const dragItem = useRef();

    const dragData = [
        {
            title: "draggables",
            items: ["L", "H", "Hurricane"]
        }
    ]

    const targetData = [
        "low-1", "low-2", "low-3", "low-4", "high-1", "high-2", "high-3", "high-4", "hurricane-1", "hurricane-2",
    ]

    const handleDragStart = (e, params) => {
        console.log("drag starting...", params)
        dragItem.current = params;
    }

    return (
        <div className="interaction-wrapper">
            <div className="img-wrapper">
                <img src="./graphics/sample.jpg" alt="" />
            </div>
            <div className="drag-n-drop">
                {dragData.map((grp, grpI) => (
                    <div className="dnd-group dnd-draggables-container" key={grp.title}>
                        {grp.items.map((item, itemI) => (
                            <div
                                draggable
                                className="dnd-item"
                                key={itemI}
                                onDragStart={(e) => { handleDragStart(e, { grpI, itemI }) }}
                            >
                                <div>
                                    <p>{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                {targetData.map((data, i) => (
                    <div className={`dnd-group dnd-target dnd-target-${data}`} key={i}>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DndWrapper;