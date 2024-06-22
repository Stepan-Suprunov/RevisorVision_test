import {useEffect, useState} from "react";
import axios from "axios";
import Photo from "./Photo/Photo";

const Photos = (props) => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(
            'api/photos/' + props.albumID, {withCredentials: false}
        )
            .then((response) => {
                const allPhotos = response.data;
                setPhotos(allPhotos);
            });
    }, [setPhotos]);

    return (
        <div>
            {photos.map((photo) => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default Photos;