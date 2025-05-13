// import React from 'react';
import './OnOff.css'
import {useState} from "react";

type PropsType = {
    onChange: (type: boolean) => void
}
export const UncontrolledOnOff = (props: PropsType) => {

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

    const clickOffHandler = () => {
        setType(false)
        props.onChange(false)
    }
    const clickOnHandler = () => {
        setType(true)
        props.onChange(true)
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <div onClick={clickOnHandler} style={onStyle}>On</div>
            <div onClick={clickOffHandler} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
