import {useReducer} from "react";
import {reducer} from "./reducer.ts";

type PropsType = {
    titleValue: string
    defaultCollapsed?: boolean
    onChange?: (collapsed: boolean) => void
}

export const UncontrolledAccordion = (props: PropsType) => {

    // const [collapsed, setCollapsed] = useState<boolean>(props.defaultCollapsed ?? false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    // const clickCollapsedHandler = () => setCollapsed(!collapsed); props.onChange?.(collapsed)
    const clickCollapsedHandler = () => dispatch({type: 'TOGGLE-COLLAPSED'}); props.onChange?.(state.collapsed)
    return (
        <div>
            <UncontrolledAccordionTitle onClick={clickCollapsedHandler} title={props.titleValue}/>
            {!state.collapsed && <UncontrolledAccordionBody/>}
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
