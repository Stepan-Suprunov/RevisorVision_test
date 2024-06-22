import {useState} from "react";
import FavouritesContainer from "../../../favouritesPage/FavouritesContainer";
import store from "../../../../redux/store";

const Photo = (props) => {

    const [favourite, setFavourite] = useState(false);

    const onButtonFavouriteClick = () => {
        setFavourite((prevState) => !prevState);

        if (favourite) {
            return (
                <FavouritesContainer photo={props.photo} action={true}/>
            );
        };
        if (!favourite) {
            return (
                <FavouritesContainer photo={props.photo} action={false}/>
            );
        };
    };

    console.log(store.getState());

    return (
        <li>
            <img src={props.photo.url} alt="photo"/>
            <button onClick={onButtonFavouriteClick}>{favourite ? '-' : '+'}</button>
        </li>
    );
};

export default Photo;