export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
    onClick: (value: RatingValueType) => void
}
export const Rating = (props: RatingPropsType) => {
    console.log("Rating rendering")

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}
const Star = (props: StarPropsType) => {
    console.log("star rendering")
    const spanStyleActive = {
        color: "yellow",
        cursor: "pointer"
    }
    const spanStyle = {
        color: "white",
        cursor: "pointer"
    }
    return <span
        onClick={() => {props.onClick(props.value)}}
        style={props.selected ? spanStyleActive : spanStyle}>
        {props.selected ? <b>✯ </b> : "✯ "}
    </span>
}