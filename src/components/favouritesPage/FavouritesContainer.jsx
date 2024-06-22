import {connect} from "react-redux";
import Favourites from "./Favourites";
import {addPictureActionCreator, removePictureActionCreator} from "../../redux/favouritesReducer";

const mapStateToProps = (state, ownProps) => {
    return {
        favourites: state.favourites,
        photo: ownProps.photo,
        action: ownProps.action
    };
};

export default connect(mapStateToProps, {addPictureActionCreator, removePictureActionCreator})(Favourites);