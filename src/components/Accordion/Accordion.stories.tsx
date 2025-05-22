import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import {useState} from "react";

export default  {
    component: Accordion,
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

const handleCollapsed = action('onClickCollapsed')

export const CollapsedAccordion = () => {
    return (
        <Accordion collapsed={true} onClick={handleCollapsed} titleValue={"Collapsed Accordion"}/>
    )
}
export const OpenedAccordion = () => {
    return (
        <Accordion collapsed={false} onClick={() => {}} titleValue={"Opened Accordion"}/>
    )
}
export const FullAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <Accordion collapsed={collapsed} onClick={() => {setCollapsed(!collapsed)}} titleValue={"Accordion"}/>
    )
}