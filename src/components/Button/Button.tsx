import { IoIosAdd } from "react-icons/io";
import { IoIosBatteryCharging } from "react-icons/io";
import { IoIosChatboxes } from "react-icons/io";
type ButtonPropsType = {
    style: {
        backgroundColor: string,
    },
    kind: 1 | 2 | 3,
}
export function Button(props: ButtonPropsType) {
    if (props.kind === 1) {
        return (
            <button style={props.style}>
                <IoIosBatteryCharging />
            </button>
        )
    }
    if (props.kind === 2) {
        return (
            <button style={props.style}>
                <IoIosAdd />
            </button>
        )
    }
    return (
        <button style={props.style}>
            <IoIosChatboxes />
        </button>
    )
}