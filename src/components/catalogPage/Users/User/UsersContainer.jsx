import axios from "axios";
import {connect} from "react-redux";
import Users from "../Users";
import {usersFetchActinCreator} from "../../../../redux/usersReducer";
import store from "../../../../redux/store";

axios.get(
    'api/users', {withCredentials: false}
)
    .then((response) => {
        usersFetchActinCreator(response.data);
    });

console.log(store.state)

const mapStateToProps = (state) => {
    return {
        users: store.state.users
    };
};

export default connect(mapStateToProps, {usersFetchActinCreator})(Users);