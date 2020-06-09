import React, { useState, useRef } from 'react';

const DndWrapper = () => {

    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();

    const [dragData, setDragData] = useState([
        {
            title: "dnd-draggables-container",
            items: ["L", "H", "Hurricane"]
        },
        {
            title: "dnd-target dnd-target-low-1",
            items: []
        },
        {
            title: "dnd-target dnd-target-low-2",
            items: []
        },
        {
            title: "dnd-target dnd-target-low-3",
            items: []
        },
        {
            title: "dnd-target dnd-target-low-4",
            items: []
        },
        {
            title: "dnd-target dnd-target-high-1",
            items: []
        },
        {
            title: "dnd-target dnd-target-high-2",
            items: []
        },
        {
            title: "dnd-target dnd-target-high-3",
            items: []
        },
        {
            title: "dnd-target dnd-target-high-4",
            items: []
        },
        {
            title: "dnd-target dnd-target-hurricane-1",
            items: []
        },
        {
            title: "dnd-target dnd-target-hurricane-2",
            items: []
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
        const currentItem = dragItem.current;
        if (e.target !== dragNode.current) {
            setDragData(oldDragData => {
                let newDragData = JSON.parse(JSON.stringify(oldDragData));
                newDragData[params.grpI].items.splice(params.itemI, 0, newDragData[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]);
                dragItem.current = params;
                return newDragData;
            })
        }
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
                    <div
                        className={`dnd-group ${grp.title}`}
                        key={grp.title}
                        onDragEnter={dragging && !grp.items.length ? (e) => { handleDragEnter(e, { grpI, itemI: 0 }) } : null}
                    >
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
                {/* {targetData.map((grp, grpI) => (
                    <div
                        className={`dnd-group dnd-target dnd-target-${grp.title}`}
                        key={grpI}
                        onDragEnter={dragging && !grp.items.length ? (e) => { handleDragEnter(e, { grpI, itemI: 0 }) } : null}
                    >
                    </div>
                ))} */}
            </div>
        </div>
    );
}

export default DndWrapper;