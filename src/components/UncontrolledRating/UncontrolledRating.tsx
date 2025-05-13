import {useState} from "react";

export function UncontrolledRating() {
    console.log("Rating rendering")

    const [value, setValue] = useState<number>(0)

    return (
        <div>
            <Star onClick={() => {
                setValue(1)
            }} selected={value > 0}/>
            <Star onClick={() => {
                setValue(2)
            }} selected={value > 1}/>
            <Star onClick={() => {
                setValue(3)
            }} selected={value > 2}/>
            <Star onClick={() => {
                setValue(4)
            }} selected={value > 3}/>
            <Star onClick={() => {
                setValue(5)
            }} selected={value > 4}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    onClick: () => void
}

function Star(props: StarPropsType) {
    console.log("star rendering")
    const spanStyleActive = {
        color: "yellow",
        cursor: "pointer",
    }
    const spanStyle = {
        cursor: "pointer",
    }
    return <span
        onClick={props.onClick}
        style={props.selected ? spanStyleActive : spanStyle}>
        {props.selected ? <b>✯ </b> : "✯ "}
    </span>
}