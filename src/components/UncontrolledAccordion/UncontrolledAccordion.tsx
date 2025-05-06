import {useState} from "react";

type PropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: PropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const clickCollapsedHandler = () => !collapsed ? setCollapsed(true)
        : setCollapsed(!collapsed)

    return (
        <div>
            <UncontrolledAccordionTitle onClick={clickCollapsedHandler} title={props.titleValue}/>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    );
};
type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

function UncontrolledAccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={props.onClick} style={{cursor: "pointer"}}>-- {props.title} --</h3>
    )
}

function UncontrolledAccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
