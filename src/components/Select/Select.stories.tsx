import {useState} from "react";
import s from './Select.module.css'

export default {
    // component: input,
    title: "Select Stories",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

type ItemType = {
    id: number
    title: string
}

export const Select = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedItem, setSelectedItem] = useState<ItemType | null>(null)
    const [items, setItems] = useState<ItemType[]>([
        {id: 1, title: 'Kaif'},
        {id: 2, title: 'Chill'},
        {id: 3, title: 'Baldezh'},
        {id: 4, title: 'Bez Kaifa'},
    ])

    const handleOpenMode = () => {
        setIsOpen(!isOpen)
    }
    const handleSelectItem = (item: ItemType) => {
        setSelectedItem(item)
        setIsOpen(false)
    }

    return (
        <div className={s.selectWrapper}>
            <div className={s.select}>
                <div className={s.selectTitle} onClick={handleOpenMode}>
                    {
                        selectedItem ? selectedItem.title : "select"
                    }
                </div>
                {isOpen &&
                    <div className={s.selectBody}>
                        {items.map(item => {
                            return (
                                <div className={s.selectItem} key={item.id}
                                     onClick={() => handleSelectItem(item)}>{item.title}</div>
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}
