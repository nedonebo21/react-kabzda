import {useState} from "react";

export default {
    title: "useState demo",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

const generateData = () => {
    console.log('generate data')
    return 1
}

export const Example1 = () => {
    console.log('example')
    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState<number>(generateData) //[1, function(newValue)]
    // const changer = (state: number) => state+1
    return (
        <>
            <button onClick={() => setCounter(state => state + 1)}>click</button>
            {counter}
        </>
    )
}