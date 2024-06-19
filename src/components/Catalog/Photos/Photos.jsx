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

    const photosFromLocalState = photos.map((photo) => <Photo photoURL={photo.url}/>);

    return (
        <div>
            {photosFromLocalState}
        </div>
    );
};

export default Photos;