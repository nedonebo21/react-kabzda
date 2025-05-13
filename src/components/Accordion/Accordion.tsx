type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onClick: (accordionCollapsed: boolean) => void
}
export const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle
                collapsed={props.collapsed}
                onClick={props.onClick}
                title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean,
    onClick: (accordionCollapsed: boolean) => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <h3 style={{
            cursor: "pointer"
        }}
            onClick={() => {props.onClick(!props.collapsed)}}>-- {props.title} --</h3>
    )
}

const AccordionBody =() => {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}