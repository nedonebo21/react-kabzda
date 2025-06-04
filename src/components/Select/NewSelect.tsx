import s from './NewSelect.module.css'
import {useEffect, useState} from "react";
import {KeyboardEvent} from "react";

type ItemType = {
    value: number
    title: string
}
type SelectProps = {
    items: ItemType[]
    value?: number | null
    onChange: (value: number) => void
}
export const NewSelect = (props: SelectProps) => {

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
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp'){
            for (let i =0; i < props.items.length; i++){
                if (hovered){
                    if (props.items[i].value === hovered ){
                        const pretendItem = e.key === 'ArrowDown'
                            ? props.items[i+1]
                            : props.items[i-1]
                        if (pretendItem){
                            props.onChange(pretendItem.value)
                            return
                        }
                    }
                }
            }
            if (!selectedItem){
                props.onChange(props.items[0].value)
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
        }
    }

    return (
        <div onKeyUp={handleKeyUp} className={s.select} tabIndex={0}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title || 'choose your city'}</span>
            {
                active &&
                <div className={s.items}>
                    {props.items.map(el =>
                        <div
                            onMouseEnter={() => handleMouse(el.value)}
                            className={s.item  + ' ' + (hoveredItem === el ? s.selected : '')}
                            onClick={() => handleItemClick(el.value)} key={el.value}>{el.title}</div>)}
                </div>
            }
        </div>
    )
}
