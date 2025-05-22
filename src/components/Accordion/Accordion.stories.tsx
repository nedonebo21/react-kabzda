import { action } from '@storybook/addon-actions';

import { Accordion } from './Accordion';
import {useState} from "react";

export default  {
    component: Accordion,
    title: "Accordion Stories",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

const handleClick = action('accordion mode change')

export const MenuCollapsedMode = () => {
    return (
        <Accordion collapsed={true} onClick={handleClick} titleValue={"Menu"}/>
    )
}
export const UsersUncollapsedMode = () => {
    return (
        <Accordion collapsed={false} onClick={handleClick} titleValue={"Users"}/>
    )
}
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState(true)
    return (
        <Accordion collapsed={collapsed} onClick={setCollapsed} titleValue={"Accordion"}/>
    )
}