import User from "./User/User";
import axios from "axios";
import {useEffect, useState} from "react";

const Users = () => {

    const [users, setUsers] = useState("users");

    useEffect(() => {
        axios.get(
            'api/users', {withCredentials: false}
    )
            .then((response) => {
                const allUsers = response.data;
                setUsers(allUsers);
            });
    }, [setUsers]);

    console.log(users);

    // const usersFromLocalState = users.map((user) => <User userName={user.name} />);

  return (
    <div>

    </div>
  );
};

export default Users;