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

    return (
        <ul>
            {users.map((user) => <User key={user.id} userName={user.name} userID={user.id}/>)}
        </ul>
    );
};

export default Users;