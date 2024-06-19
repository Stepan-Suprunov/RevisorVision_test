import Albums from "../../Albums/Albums";
import {useState} from "react";

const User = (props) => {

    const [albums, setAlbums] = useState(false);

    const onButtonClick = () => {
        setAlbums((prevState) => !prevState);
    };

    const buttonChange = () => {
        if (albums) return '-'
        else return '+'
    };

    const showAlbums = () => {
        if (albums) {
            return (
                <Albums userID={props.userID}/>
            );
        }
        else return null;
    };

    return (
        <li>
            <button onClick={onButtonClick}>{buttonChange()}</button>
            <span>{props.userName}</span>
            <ul>{showAlbums()}</ul>
        </li>
    );
};

export default User;