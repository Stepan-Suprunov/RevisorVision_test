import {useState} from "react";
import {connect} from "react-redux";
import {addPictureActionCreator, removePictureActionCreator} from "../../../../redux/favouritesReducer";

const Photo = (props) => {

    const [favourite, setFavourite] = useState(props.favourite);
console.log(favourite);
    const onButtonFavouriteClick = () => {
        setFavourite((prevState) => !prevState);

        if (!favourite) {
            props.addPictureActionCreator(props.photo);
        } else {
            props.removePictureActionCreator(props.photo);
        };
    };

    return (
        <li>
            <img src={props.photo.url} alt="photo"/>
            <button onClick={onButtonFavouriteClick}>{favourite ? '-' : '+'}</button>
        </li>
    );
};

export default connect(null, {addPictureActionCreator, removePictureActionCreator})(Photo);