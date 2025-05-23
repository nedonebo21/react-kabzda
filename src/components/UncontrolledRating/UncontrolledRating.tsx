import {useState} from "react";
import {RatingValueType} from "../Rating/Rating.tsx";


type Props = {
    defaultValue?: RatingValueType
    onChange?: (value: RatingValueType) => void
}

export function UncontrolledRating(props: Props) {
    console.log("Rating rendering")

    const [value, setValue] = useState<number>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star setValue={() => {
                setValue(1);
                props.onChange?.(1)
            }} selected={value > 0}/>
            <Star setValue={() => {
                setValue(2);
                props.onChange?.(2)
            }} selected={value > 1}/>
            <Star setValue={() => {
                setValue(3);
                props.onChange?.(3)
            }} selected={value > 2}/>
            <Star setValue={() => {
                setValue(4);
                props.onChange?.(4)
            }} selected={value > 3}/>
            <Star setValue={() => {
                setValue(5);
                props.onChange?.(5)
            }} selected={value > 4}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    setValue: () => void
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
        onClick={() => {
            props.setValue()
        }}
        style={props.selected ? spanStyleActive : spanStyle}>
        {props.selected ? <b>✯ </b> : "✯ "}
    </span>
}