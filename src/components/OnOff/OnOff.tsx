import '../UncontrolledOnOff/OnOff.css'

type OnOffProps = {
    onClick: (type:boolean) => void
    type: boolean
}

export const OnOff = (props: OnOffProps) => {


    const onStyle = {
        width: "50px",
        height: "30px",
        marginRight: "2px",
        border: "1px solid white",
        display: "inline-block",
        backgroundColor: props.type ? "green" : "#242424",
    }
    const offStyle = {
        width: "50px",
        height: "30px",
        border: "1px solid white",
        display: "inline-block",
        backgroundColor: !props.type ? "red" : "#242424",
    }
    const indicatorStyle = {
        width: '14px',
        height: '14px',
        marginLeft: "8px",
        borderRadius: '50%',
        border: '1px solid white',
        display: "inline-block",
        backgroundColor: props.type ? "green" : "red",
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <div onClick={() => {props.onClick(true)}} style={onStyle}>On</div>
            <div onClick={() => {props.onClick(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};