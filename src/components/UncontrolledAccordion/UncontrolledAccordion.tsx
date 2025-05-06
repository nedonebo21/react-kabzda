import {useState} from "react";

type PropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: PropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const clickCollapsedHandler = () => !collapsed ? setCollapsed(true)
        : setCollapsed(false)

    return (
        <div>
            <UncontrolledAccordionTitle title={props.titleValue}/>
            <button
                style={
                    {width: "50px", height: "30px", fontSize: "16px", color: "white", backgroundColor: "gray"}
                }
                onClick={clickCollapsedHandler}
            >Toggle
            </button>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    );
};
type AccordionTitlePropsType = {
    title: string,
}

function UncontrolledAccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>-- {props.title} --</h3>
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
