import {connect} from "react-redux";
import Users from "./Users";
import {usersFetchActionCreator} from "../../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps, {usersFetchActionCreator})(Users);