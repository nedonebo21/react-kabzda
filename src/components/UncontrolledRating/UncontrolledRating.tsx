import {useState} from "react";

export function UncontrolledRating() {
    console.log("Rating rendering")

    const btnStyle = {
        width: "50px", height: "30px", fontSize: "16px", color: "white", backgroundColor: "gray"
    }

    const [value, setValue] = useState<number>(0)

    return (
        <div>
            <Star selected={value > 0}/>
            <button style={btnStyle} onClick={() => {setValue(1)}}>1</button>
            <Star selected={value > 1}/>
            <button style={btnStyle} onClick={() => {setValue(2)}}>2</button>
            <Star selected={value > 2}/>
            <button style={btnStyle} onClick={() => {setValue(3)}}>3</button>
            <Star selected={value > 3}/>
            <button style={btnStyle} onClick={() => {setValue(4)}}>4</button>
            <Star selected={value > 4}/>
            <button style={btnStyle} onClick={() => {setValue(5)}} >5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log("star rendering")

    if (props.selected) {
        return <span style={{color: "yellow"}}><b>star </b></span>
    } else {
        return <span>star </span>
    }
}