import User from "./User/User";

const Users = (props) => {
    return (
        <ul>
            {props.users.map((user) => <User key={user.id} userName={user.name} userID={user.id}/>)}
        </ul>
    );
};

export default Users;