import User from "./User/User";
import {useEffect} from "react";
import axios from "axios";

const Users = (props) => {
    console.log(props, "пропсы приходящие в Users");
    useEffect(() => {
        axios.get(
            'api/users', {withCredentials: false}
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