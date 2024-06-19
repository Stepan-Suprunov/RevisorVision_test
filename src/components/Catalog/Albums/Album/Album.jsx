import Photos from "../../Photos/Photos";
import {useState} from "react";


const Album = (props) => {

    const [photos, setPhotos] = useState(false);

    const onButtonClick = () => {
        setPhotos((prevState) => !prevState);
    };

    const buttonChange = () => {
        if (photos) return '-'
        else return '+'
    };

    const showPhotos = () => {
        if (photos) {
            return (
                <Photos albumID={props.albumID}/>
            );
        }
        else return null;
    };

    return (
        <li>
            <button onClick={onButtonClick}>{buttonChange()}</button>
            <span>{props.albumTitle}</span>
            <ul>{showPhotos()}</ul>
        </li>
    );
};

export default Album;