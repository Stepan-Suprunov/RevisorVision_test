import axios from "axios";
import {connect} from "react-redux";
import Users from "../Users";
import {usersFetchActinCreator} from "../../../../redux/usersReducer";

axios.get(
    'api/users', {withCredentials: false}
)
    .then((response) => {
        usersFetchActinCreator(response.data);
    });

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps, {usersFetchActinCreator})(Users);