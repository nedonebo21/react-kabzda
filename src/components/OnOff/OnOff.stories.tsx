import {action} from '@storybook/addon-actions';

import {OnOff} from './OnOff';
import {useState} from "react";

export default {
    component: OnOff,
    title: "OnOff Stories",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};
const HandleClick = action('on or off clicked')


export const OnMode = () => {
    return (
        <OnOff type={true} onClick={HandleClick}/>
    )
}
export const OffMode = () => {
    return (
        <OnOff type={false} onClick={HandleClick}/>
    )
}
export const ChangingMode = () => {
    const [type, setType] = useState<boolean>(true)
    return (
        <OnOff type={type} onClick={setType}/>
    )
}
