import {UncontrolledAccordion} from './UncontrolledAccordion';
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

export const SelfControlledAccordionMode = () => {
    return (
        <UncontrolledAccordion titleValue={"Menu"}/>
    )
}