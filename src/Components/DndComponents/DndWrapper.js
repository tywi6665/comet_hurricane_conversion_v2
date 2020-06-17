import React, { useState, useEffect, useRef } from 'react';
import Button from "./Button";
import ImgWrapper from './ImgWrapper';
import SubContainer from '../Containers/SubContainer';
import Modal from "../Modal";
import useModal from "../../utils/useModal";

const DndWrapper = () => {

    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();
    const [dragData, setDragData] = useState([
        {
            title: "dnd-draggables-container",
            items: [["L", "low"], ["H", "high"], ["hurricane", "hurricane"]],
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
    const [isToggled, setIsToggled] = useState(true)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const { isShowing, toggle, modalData } = useModal();

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
        document.getElementById("dnd-item-hurricane").style.display = "none";
        document.querySelectorAll(".dnd-target").forEach(e =>
            e.classList.add("is-animating"));
        setIsSubmitted(!isSubmitted)
    }

    const handleReset = (e) => {
        e.preventDefault()
        document.querySelectorAll(".dnd-target").forEach(e =>
            e.classList.remove("is-animating"));
        setDragData(initialDragDataCopy);
        setDropData(initialDropDataCopy);
        setIsSubmitted(false);
        setIsToggled(true);
    }

    return (
        <div className="dnd-wrapper">
            <h1>Aim a Hurricane</h1>
            <SubContainer classes={"dnd-inner-wrapper"}>

                <ImgWrapper
                    activeTargets={dropData}
                    isToggled={isToggled}
                    isSubmitted={isSubmitted}
                >
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
                                        id={`dnd-item-${item[1]}`}
                                        className={dragging ? getItemStyles({ grpI, itemI }) : "dnd-item"}
                                        key={itemI}
                                        data={item[1]}
                                        onDragStart={(e) => { handleDragStart(e, { grpI, itemI }) }}
                                        onDragEnter={dragging ? (e) => { handleDragEnter(e, { grpI, itemI }) } : null}
                                    >
                                        <div>
                                            <p
                                                className={item[1]}
                                                style={item[0] === "hurricane" ? { backgroundImage: "url(./graphics/hurricane_sprite_ani.gif)" } : null}>
                                                {item[0] === "hurricane" ? null : item[0]}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="button-box">
                            <div
                                style={dropData.low && dropData.high && dropData.hurricane ? { visibility: "visible" } : { visibility: "hidden" }}
                                className="switch"
                            >
                                <label className="switch-label" htmlFor="switch-input">
                                    <input
                                        type="checkbox"
                                        id="switch-input"
                                        className="switch-input"
                                        defaultChecked={isToggled}
                                        onChange={e => setIsToggled(!isToggled)}
                                    />
                                    Wind Overlay
                                </label>
                            </div>
                            <Button
                                type={"submit"}
                                handleClick={handleSubmit}
                                text={"Submit"}
                                data={dropData}
                            />
                            <Button
                                type={"reset"}
                                handleClick={handleReset}
                                text={"Reset"}
                                data={dropData}
                            />
                        </div>
                    </div>
                </ImgWrapper>
                <SubContainer>
                    <div className="info-box">
                        <button className="button-default directions-button" onClick={e => toggle(e)} data="directions">How to Aim a Hurricane</button>
                        <button className="button-default credit-button" onClick={e => toggle(e)} data="credits">Credits</button>
                        <Modal
                            isShowing={isShowing}
                            hide={e => toggle(e)}
                            modalData={modalData}
                        />
                    </div>
                </SubContainer>
            </SubContainer>
        </div >
    );
}

export default DndWrapper;