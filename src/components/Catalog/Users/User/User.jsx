import Albums from "../../Albums/Albums";
import {useState} from "react";
import album from "../../Albums/Album/Album";

const User = (props) => {

    const [albums, setAlbums] = useState(false);

    const onButtonClick = () => {
        setAlbums((prevState) => !prevState);
    };

    return (
        <li>
            <button onClick={onButtonClick}>{albums ? '-' : '+'}</button>
            <span>{props.userName}</span>
            <ul>{albums ? <Albums userID={props.userID}/> : null}</ul>
        </li>
    );
};

export default User;