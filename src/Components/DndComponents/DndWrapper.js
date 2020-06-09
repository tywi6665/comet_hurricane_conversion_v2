import React, { useState, useRef } from 'react';

const DndWrapper = () => {

    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();

    const dragData = [
        {
            title: "draggables",
            items: ["L", "H", "Hurricane"]
        }
    ]

    const targetData = [
        "low-1", "low-2", "low-3", "low-4", "high-1", "high-2", "high-3", "high-4", "hurricane-1", "hurricane-2",
    ]

    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
            return "active dnd-item"
        }
        return "dnd-item"
    }

    const handleDragStart = (e, params) => {
        console.log("drag starting...", params)
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener("dragend", handleDragEnd)
        setDragging(true)
    }

    const handleDragEnd = () => {
        console.log("Ending drag...")
        setDragging(false)
        dragNode.current.removeEventListener("dragend", handleDragEnd)
        dragItem.current = null;
        dragNode.current = null;
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
                                className={dragging ? getStyles({ grpI, itemI }) : "dnd-item"}
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