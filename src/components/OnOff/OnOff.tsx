// import React from 'react';
import './OnOff.css'
import {useState} from "react";

export const OnOff = () => {

    const [type, setType] = useState<boolean>(false)

    const onStyle = {
        width: "50px",
        height: "30px",
        marginRight: "2px",
        border: "1px solid white",
        display: "inline-block",
        backgroundColor: type ? "green" : "#242424",
    }
    const offStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid white",
        display: "inline-block",
        backgroundColor: !type ? "red" : "#242424",
    }
    const indicatorStyle = {
        width: '14px',
        height: '14px',
        marginLeft: "8px",
        borderRadius: '50%',
        border: '1px solid white',
        display: "inline-block",
        backgroundColor: type ? "green" : "red",
    }

    const clickOffHandler = () => setType(false)
    const clickOnHandler = () => setType(true)

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <div onClick={clickOnHandler} style={onStyle}>On</div>
            <div onClick={clickOffHandler} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
// export const OnOff = (props: OnOffProps) => {
//
//     return (
//         <div className={"OnOff"}>
//             {props.type && <OnButton/> || <button>On</button>}
//             {(!props.type && <OffButton/>) || <button>Off</button>}
//             {props.type && <GreenCircle/>}
//             {(!props.type && <RedCircle/>)}
//         </div>
//     )
// }
//
// const OnButton = () => {
//     return (
//         <button style={{backgroundColor: "green"}}>On</button>
//     )
// }
// const OffButton = () => {
//     return (
//         <button style={{backgroundColor: "red"}}>Off</button>
//     )
// }
//
// const GreenCircle = () => {
//     return (
//         <div style={{backgroundColor: "green"}} className={"circle"}></div>
//     )
// }
// const RedCircle = () => {
//     return (
//         <div style={{backgroundColor: "red"}} className={"circle"}></div>
//     )
// }