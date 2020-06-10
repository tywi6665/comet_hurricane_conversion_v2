import React, { useState, useEffect, useRef } from 'react';
import Button from "./Button";

const DndWrapper = () => {

    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();
    const [dragData, setDragData] = useState([
        {
            title: "dnd-draggables-container",
            items: [["L", "low"], ["H", "high"], ["Hurricane", "hurricane"]],
            accepts: "All",
            dataTarget: ""
        },
        {
            title: "dnd-target dnd-target-low-1",
            items: [],
            accepts: "low",
            dataTarget: "low-1"
        },
        {
            title: "dnd-target dnd-target-low-2",
            items: [],
            accepts: "low",
            dataTarget: "low-2"
        },
        {
            title: "dnd-target dnd-target-low-3",
            items: [],
            accepts: "low",
            dataTarget: "low-3"
        },
        {
            title: "dnd-target dnd-target-low-4",
            items: [],
            accepts: "low",
            dataTarget: "low-4"
        },
        {
            title: "dnd-target dnd-target-high-1",
            items: [],
            accepts: "high",
            dataTarget: "high-1"
        },
        {
            title: "dnd-target dnd-target-high-2",
            items: [],
            accepts: "high",
            dataTarget: "high-2"
        },
        {
            title: "dnd-target dnd-target-high-3",
            items: [],
            accepts: "high",
            dataTarget: "high-3"
        },
        {
            title: "dnd-target dnd-target-high-4",
            items: [],
            accepts: "high",
            dataTarget: "high-4"
        },
        {
            title: "dnd-target dnd-target-hurricane-1",
            items: [],
            accepts: "hurricane",
            dataTarget: "hurricane-1"
        },
        {
            title: "dnd-target dnd-target-hurricane-2",
            items: [],
            accepts: "hurricane",
            dataTarget: "hurricane-2"
        }
    ]);
    const [initialDragDataCopy, setInitialDragDataCopy] = useState([]);
    const [dropData, setDropData] = useState({
        low: "",
        high: "",
        hurricane: ""
    });
    const [initialDropDataCopy, setInitialDropDataCopy] = useState([]);
    useEffect(() => {
        setInitialDragDataCopy(dragData);
        setInitialDropDataCopy(dropData);
    }, []);

    const getItemStyles = (params) => {
        const currentItem = dragItem.current;
        if (currentItem.grpI === params.grpI && currentItem.itemI === params.itemI) {
            return "active-item dnd-item"
        }
        return "dnd-item"
    }

    const getTargetStyles = (params) => {
        params.forEach(param => {
            param.classList.add("active")
        });
    }

    const handleDragStart = (e, params) => {
        console.log("drag starting...", params)
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener("dragend", handleDragEnd)
        setTimeout(() => {
            setDragging(true)
        }, 0);
        document.querySelectorAll(".active").forEach(e =>
            e.classList.remove("active"));
        let targets = document.querySelectorAll(`.dnd-target[data-value=${dragNode.current.getAttribute("data")}]`);
        getTargetStyles(targets);
    }

    const handleDragEnter = (e, params) => {
        console.log("Entering drag...", params)
        const currentItem = dragItem.current;
        if ((e.target.getAttribute("data-value") === dragNode.current.getAttribute("data")) || (e.target.getAttribute("data-value") === "All")) {
            setDragData(oldDragData => {
                let newDragData = JSON.parse(JSON.stringify(oldDragData));
                newDragData[params.grpI].items.splice(params.itemI, 0, newDragData[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]);
                dragItem.current = params;
                return newDragData;
            })
            setDropData({ ...dropData, [e.target.getAttribute("data-value")]: e.target.getAttribute("data-target") }


                //     ...oldDropData => {
                //     let dataValue = (e.target.getAttribute("data-target"));

                // }
            )
        }
        // if (e.target !== dragNode.current) {
        //     setDragData(oldDragData => {
        //         let newDragData = JSON.parse(JSON.stringify(oldDragData));
        //         newDragData[params.grpI].items.splice(params.itemI, 0, newDragData[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]);
        //         dragItem.current = params;
        //         return newDragData;
        //     })
        // }
    }

    const handleDragEnd = () => {
        console.log("Ending drag...")
        document.querySelectorAll(".active").forEach(e =>
            e.classList.remove("active"));
        setDragging(false)
        dragNode.current.removeEventListener("dragend", handleDragEnd)
        dragItem.current = null;
        dragNode.current = null;
    }

    const handleSubmit = (e) => {
        console.log("submit")
    }

    const handleReset = (e) => {
        console.log("reset")
        e.preventDefault()
        setDragData(initialDragDataCopy);
        setDropData(initialDropDataCopy);
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
                        data-value={grp.accepts}
                        data-target={grp.dataTarget}
                        onDragEnter={dragging && !grp.items.length ? (e) => { handleDragEnter(e, { grpI, itemI: 0 }) } : null}
                    >
                        {grp.items.map((item, itemI) => (
                            <div
                                draggable
                                className={dragging ? getItemStyles({ grpI, itemI }) : "dnd-item"}
                                key={itemI}
                                data={item[1]}
                                onDragStart={(e) => { handleDragStart(e, { grpI, itemI }) }}
                                onDragEnter={dragging ? (e) => { handleDragEnter(e, { grpI, itemI }) } : null}
                            >
                                <div>
                                    <p className={item[1]}>{item[0]}</p>
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
            <Button
                type={"submit"}
                handleClick={handleSubmit}
                text={"Submit"}
            />
            <Button
                type={"reset"}
                handleClick={handleReset}
                text={"Reset"}
            />
        </div>
    );
}

export default DndWrapper;