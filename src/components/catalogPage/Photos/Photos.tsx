import React, {useEffect, useState} from "react";
import axios from "axios";
import Photo from "./Photo/Photo";

type Props = {
    albumID: string
};

const Photos: React.FC<Props> = (props) => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(
            'api/photos/' + props.albumID
        )
            .then((response) => {
                const allPhotos = response.data;
                setPhotos(allPhotos);
            });
    }, [setPhotos]);

    return (
        <div>
            {photos.map((photo) => <Photo key={photo.id} photo={photo} favourite={false}/>)}
        </div>
    );
};

export default Photos;