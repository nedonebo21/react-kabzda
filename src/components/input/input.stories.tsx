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
            <input ref={inputRef}/>
            <button onClick={handleSave}>save</button>
            - actual value: {value}
        </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.target.value)
    }
    return <input value={parentValue} onChange={handleChange}/>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.target.checked)
    }

    return <input checked={parentValue} onChange={handleChange} type="checkbox"/>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.target.value)
    }

    return (
        <select value={parentValue} onChange={handleChange}>
            <option>none</option>
            <option value="1">Ulyanovsk</option>
            <option value="2">Spb</option>
            <option value="3">Yo</option>
        </select>
    )
}

export const ControlledInputWithFixedValue = () => <input value={'qwe'}/>