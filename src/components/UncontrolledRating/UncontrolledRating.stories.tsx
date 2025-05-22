import {UncontrolledRating} from './UncontrolledRating';

export default {
    component: UncontrolledRating,
    title: "UncontrolledRating Stories",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

export const SelfControlledRatingMode = () => {
    return (
        <UncontrolledRating/>
    )
}