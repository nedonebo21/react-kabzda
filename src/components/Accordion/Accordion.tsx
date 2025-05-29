
type ItemType = {
    title: string
    value: string
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onChange: (accordionCollapsed: boolean) => void
    items: ItemType[]
    onClick: (value: string) => void
}
export const Accordion = (props: AccordionPropsType) => {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle
                collapsed={props.collapsed}
                onChange={props.onChange}
                title={props.titleValue}/>
            {!props.collapsed && <AccordionBody onClick={props.onClick} items={props.items}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string,
    collapsed: boolean,
    onChange: (accordionCollapsed: boolean) => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle rendering")
    return (
        <h3 style={{cursor: "pointer"}}
            onClick={() => {
                props.onChange(!props.collapsed)
            }}>-- {props.title} --</h3>
    )
}

type AccordionType = {
    items: ItemType[]
    onClick: (value: string) => void
}
const AccordionBody = (props: AccordionType) => {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((item,index) =>
                <li onClick={() => {props.onClick(item.value)}} key={index}>{item.title}</li>
            )}
        </ul>
    )
}