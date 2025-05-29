import {ChangeEvent, useRef, useState} from "react";

export default {
    // component: input,
    title: "Input Stories",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <>
            <input onChange={handleChange}/> -{value}-
        </>
    )
}
export const GetValueOfUncontrolledInputOnButtonPress = () => {
    const [value, setValue] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSave = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef}/> <button onClick={handleSave}>save</button> - actual value: {value}
        </>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'qwe'}/>