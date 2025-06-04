import {NewSelect} from "./NewSelect.tsx";
import {useState} from "react";

export default {
    // component: input,
    title: "New Custom Select Stories",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

// const handleChange = action('Value Changed')

export const WithValue = () => {
    const [value, setValue] = useState<number | null>(2)
    
    return <NewSelect
        onChange={setValue}
        value={value}
        items={[
            {value: 1, title: 'Moscow'},
            {value: 2, title: 'Uly'},
            {value: 3, title: 'Spb'},
        ]}
    />
}
export const WithoutValue = () => {
    const [value, setValue] = useState<number | null>(null)

    return <NewSelect
        value={value}
        onChange={setValue}
        items={[
            {value: 1, title: 'Moscow'},
            {value: 2, title: 'Uly'},
            {value: 3, title: 'Spb'},
        ]}
    />
}