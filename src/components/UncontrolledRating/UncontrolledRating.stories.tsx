import {UncontrolledRating} from './UncontrolledRating';
import {action} from "@storybook/addon-actions";

export default {
    component: UncontrolledRating,
    title: "UncontrolledRating Stories",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

const handleValueChange = action("rating changed inside component")
export const EmptyRating = () => {
    return (
        <UncontrolledRating defaultValue={0} onChange={handleValueChange}/>
    )
}
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={handleValueChange}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={handleValueChange}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={handleValueChange}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={handleValueChange}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={handleValueChange}/>