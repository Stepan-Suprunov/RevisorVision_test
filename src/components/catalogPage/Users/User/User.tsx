import React, {useState} from "react";
import Albums from "../../Albums/Albums";

type Props = {
    userName: string
    userID: string
    key: string
};

const User: React.FC<Props> = (props) => {

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