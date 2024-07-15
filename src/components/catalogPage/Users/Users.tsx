import React from 'react'
import {useEffect} from "react";
import axios from "axios";
import User from "./User/User";

type Users = {
    id: string
    name: string
    username: string
    email: string
};

type Props = {
    users: Users[]
    usersFetchActionCreator: (users: Users[]) => void
};


const Users: React.FC<Props> = (props) => {
    useEffect(() => {
        axios.get(
            'api/users'
        )
            .then((response) => {
                props.usersFetchActionCreator(response.data);
            });
    }, [])
    return (
        <ul>
            {props.users.map((user) => <User key={user.id} userName={user.name} userID={user.id}/>)}
        </ul>
    );
};

export default Users;