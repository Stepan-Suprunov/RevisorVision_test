import {useState} from "react";
import {connect} from "react-redux";
import {addPictureActionCreator, removePictureActionCreator} from "../../../../redux/favouritesReducer";
import {Modal} from "../../../Modal/Modal";

const Photo = (props) => {

    const [favourite, setFavourite] = useState(props.favourite);

    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);

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
            <img onClick={() => setModalInfoOpen(true)} src={props.photo.url} alt="photo"/>
            <button onClick={onButtonFavouriteClick}>{favourite ? '-' : '+'}</button>
            <Modal
                isOpen={modalInfoIsOpen}
                onClose={() => setModalInfoOpen(false)}>
                <img src={props.photo.url} alt="photo"/>
            </Modal>
        </li>
);
};

export default connect(null, {
    addPictureActionCreator, removePictureActionCreator})(Photo);