import Photo from "../catalogPage/Photos/Photo/Photo";
import React from "react";
import {PhotoType} from "../../redux/favouritesReducer";

type Props = {
    favourites: PhotoType[]
}

const Favourites: React.FC<Props> = (props) => {


    if (props.favourites.length > 0) {
        return (
            props.favourites.map((photo) => <Photo key={photo.id} photo={photo} favourite={true}/>)
        );
    } else return (
        <span>Список избранного пуст</span>
    );
};

export default Favourites;