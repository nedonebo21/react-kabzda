import {UncontrolledAccordion} from './UncontrolledAccordion';
import {action} from "@storybook/addon-actions";
// import {useState} from "react";

export default {
    component: UncontrolledAccordion,
    title: "UncontrolledAccordion Stories",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};
const HandleCollapsed = action('on click collapsed/uncollapsed')

export const DefaultCollapsedMode = () => <UncontrolledAccordion titleValue={"Menu"} defaultCollapsed={true} onChange={HandleCollapsed}/>

export const DefaultUncollapsedMode = () => <UncontrolledAccordion titleValue={"Menu"} defaultCollapsed={false} onChange={HandleCollapsed}/>