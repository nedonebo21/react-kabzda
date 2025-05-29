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
const handleClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => {
    return (
        <Accordion collapsed={true} onClick={handleClickCallback} onChange={handleClick} titleValue={"Menu"} items={[]}/>
    )
}
export const UsersUncollapsedMode = () => {
    const usersArr = [
        {value: "1", title:'Tolik Shelban'},
        {value: "2", title:'Tyler Durden'},
        {value: "3", title:'Ryan Gosling'},
    ]
    return (
        <Accordion collapsed={false} onClick={handleClickCallback} onChange={handleClick} titleValue={"Users"} items={usersArr}/>
    )
}
export const ModeChanging = () => {
    const [collapsed, setCollapsed] = useState(true)
    const usersArr = [
        {value: "1", title:'Tolik Shelban'},
        {value: "2", title:'Tyler Durden'},
        {value: "3", title:'Ryan Gosling'},
    ]
    return (
        <Accordion collapsed={collapsed} onClick={handleClickCallback} onChange={setCollapsed} titleValue={"Accordion"} items={usersArr}/>
    )
}