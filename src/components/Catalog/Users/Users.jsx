import User from "./User/User";
import axios from "axios";
import {useEffect, useState} from "react";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(
            'api/users', {withCredentials: false}
        )
            .then((response) => {
                const allUsers = response.data;
                setUsers(allUsers);
            });
    }, [setUsers]);

    const usersFromLocalState = users.map((user) => <User userName={user.name} userID={user.id}/>);

    return (
        <ul>
            {usersFromLocalState}
        </ul>
    );
};

export default Users;