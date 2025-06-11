import {useState} from "react";
import * as React from "react";

export default {
    title: "React Memo",
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

const NewMessageCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: {users: string[]}) => {
    console.log('users')
    return (
        <div>
            {props.users.map((u,i) => <div key={i}>{u}</div> )}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Sas', 'Abobiy', 'Tolik Shelby'])

    const handleAddUser = () => {
        setUsers([
            'yo' + new Date().getDate(),
            ...users
        ])
    }
    return (
        <>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <button onClick={handleAddUser}>add user</button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}