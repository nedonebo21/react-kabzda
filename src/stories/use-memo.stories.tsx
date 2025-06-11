import {KeyboardEvent, useEffect, useMemo, useState} from "react";
import * as React from "react";
import {NewSelect} from "../components/Select/NewSelect.tsx";
import s from "../components/Select/NewSelect.module.css";

export default {
    title: "Use Memo",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

export const HardCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            // let fake = 0
            // while(fake < 10000){
            //     fake++
            //     const fakeValue = Math.random()
            // }
            tempResult *= i
        }
        return tempResult
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('users')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpForReactMemo = () => {
    console.log('helps')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Sas', 'Abobiy', 'Tolik Shelby'])

    const filteredUsers = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('y') > -1)
    }, [users])

    const addUser = () => {
        setUsers([
            'sasy',
            ...users
        ])
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            {counter}
            <Users users={filteredUsers}/>
        </>
    )
}


type ItemType = {
    value: number
    title: string
    country: string
    population: number
}
type SelectProps = {
    items: ItemType[]
    value?: number | null
    onChange: (value: number) => void
}
const SelectSecret = (props: SelectProps) => {
    console.log('select')

    const [active, setActive] = useState<boolean>(false)
    const [hovered, setHovered] = useState<number | undefined | null>(props.value)

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hovered)

    useEffect(() => {
        setHovered(props.value);

    }, [props.value]);

    const toggleItems = () => {
        setActive(!active)
    }
    const handleItemClick = (value: number) => {
        props.onChange(value)
        toggleItems()
    }
    const handleMouse = (value: number) => {
        setHovered(value)
    }
    const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (hovered) {
                    if (props.items[i].value === hovered) {
                        const pretendItem = e.key === 'ArrowDown'
                            ? props.items[i + 1]
                            : props.items[i - 1]
                        if (pretendItem) {
                            props.onChange(pretendItem.value)
                            return
                        }
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div onKeyUp={handleKeyUp} className={s.select} tabIndex={0}>
            <span className={s.main}
                  onClick={toggleItems}>{selectedItem && selectedItem.title || 'choose your city'}</span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map(el =>
                        <div
                            onMouseEnter={() => handleMouse(el.value)}
                            className={s.item + ' ' + (hoveredItem === el ? s.selected : '')}
                            onClick={() => handleItemClick(el.value)} key={el.value}>{el.title}</div>)}
                </div>
            }
        </div>
    )
}
const Select = React.memo(SelectSecret)

export const HelpForReactMemoSelect = () => {
    console.log('hepls select')
    const [value, setValue] = useState<number | null>(2)
    const [counter, setCounter] = useState<number>(0)
    const [cities, setCities] = useState<ItemType[]>([
        {value: 1, title: 'Ulyanovsk', country: 'Russia', population: 600_000},
        {value: 2, title: 'Spb', country: 'Russia', population: 5_000_000},
        {value: 3, title: 'Minsk', country: 'Belarus', population: 7_000_000},
        {value: 5, title: 'Tbilisi', country: 'Gruzia', population: 6_000_000},
        {value: 5, title: 'Minsk2', country: 'Belarus', population: 2_000_000},
    ])
    const filteredCitiesByCountryRussia = useMemo(() => {
        return cities.filter(el => el.country === 'Russia')
    }, [cities]);

    const filteredCitiesByCountryBelarus = useMemo(() => {
        return cities.filter(el => el.country === 'Belarus')
    }, [cities])

    const filteredCitiesByPopulation = useMemo(() => {
        return cities.filter(el => el.population > 2_000_000)
    }, [cities])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>qwe</button>
            <div>{counter}</div>
            <Select items={filteredCitiesByCountryRussia} onChange={setValue} value={value}/>
            <Select items={filteredCitiesByPopulation} onChange={setValue} value={value}/>
            <Select items={filteredCitiesByCountryBelarus} onChange={setValue} value={value}/>
        </>
    )
}