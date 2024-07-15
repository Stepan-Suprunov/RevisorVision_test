import Photos from "../../Photos/Photos";
import React, {useState} from "react";

type Props = {
    key: string
    albumTitle: string
    albumID: string
};

const Album: React.FC<Props> = (props) => {

    const [photos, setPhotos] = useState(false);

    const onButtonClick = () => {
        setPhotos((prevState) => !prevState);
    };

    return (
        <li>
            <button onClick={onButtonClick}>{photos ? '-' : '+'}</button>
            <span>{props.albumTitle}</span>
            <ul>{photos ? <Photos albumID={props.albumID}/> : null}</ul>
        </li>
    );
};

export default Album;