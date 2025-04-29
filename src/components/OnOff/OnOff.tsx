import './OnOff.css'

type OnOffProps = {
    type: boolean
}

export const OnOff = (props: OnOffProps) => {

    return (
        <div className={"OnOff"}>
            {props.type && <OnButton/> || <button>On</button>}
            {(!props.type && <OffButton/>) || <button>Off</button>}
            {props.type && <GreenCircle/>}
            {(!props.type && <RedCircle/>)}
        </div>
    )
}

const OnButton = () => {
    return (
        <button style={{backgroundColor: "green"}}>On</button>
    )
}
const OffButton = () => {
    return (
        <button style={{backgroundColor: "red"}}>Off</button>
    )
}

const GreenCircle = () => {
    return (
        <div style={{backgroundColor: "green"}} className={"circle"}></div>
    )
}
const RedCircle = () => {
    return (
        <div style={{backgroundColor: "red"}} className={"circle"}></div>
    )
}