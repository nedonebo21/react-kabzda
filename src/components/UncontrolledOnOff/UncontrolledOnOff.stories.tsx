// import { action } from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";

export default {
    component: UncontrolledOnOff,
    title: "UncontrolledOnOff Stories",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

const handleModeChange = action('swap on/off mode')

export const SelfControlledOnOffMode = () => {
    return (
        <UncontrolledOnOff onChange={handleModeChange}/>
    )
}