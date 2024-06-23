import {connect} from "react-redux";
import Favourites from "./Favourites";

const mapStateToProps = (state) => {
    return {
        favourites: state.favourites
    };
};

export default connect(mapStateToProps, {})(Favourites);