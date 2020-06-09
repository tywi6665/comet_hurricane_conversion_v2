import React, { useState, useRef } from 'react';

const DndWrapper = () => {

    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();

    const [dragData, setDragData] = useState([
        {
            title: "draggables",
            items: ["L", "H", "Hurricane"]
        }
    ]);

    const [targetData, setTargetData] = useState([
        {
            title: "low-1",
            items: ""
        },
        {
            title: "low-2",
            items: ""
        },
        {
            title: "low-3",
            items: ""
        },
        {
            title: "low-4",
            items: ""
        },
        {
            title: "high-1",
            items: ""
        },
        {
            title: "high-2",
            items: ""
        },
        {
            title: "high-3",
            items: ""
        },
        {
            title: "high-4",
            items: ""
        },
        {
            title: "hurricane-1",
            items: ""
        },
        {
            title: "hurricane-2",
            items: ""
        }
    ]);

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
        setTimeout(() => {
            setDragging(true)
        }, 0);
    }

    const handleDragEnter = (e, params) => {
        console.log("Entering drag...", params)
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
                                onDragEnter={dragging ? (e) => { handleDragEnter(e, { grpI, itemI }) } : null}
                            >
                                <div>
                                    <p>{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                {targetData.map((grp, grpI) => (
                    <div
                        className={`dnd-group dnd-target dnd-target-${grp.title}`}
                        key={grpI}
                        onDragEnter={dragging && !grp.items.length ? (e) => { handleDragEnter(e, { grpI, itemI: 0 }) } : null}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DndWrapper;