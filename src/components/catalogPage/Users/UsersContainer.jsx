import {connect} from "react-redux";
import Users from "./Users";
import {usersFetchActionCreator} from "../../../redux/usersReducer";
import store from "../../../redux/store";

const mapStateToProps = () => {
    console.log(store.getState(), 'стейт из контейнера');
    return {
        users: store.getState().users
    };
};

export default connect(mapStateToProps, {usersFetchActionCreator})(Users);