import {useEffect, useState} from "react";
import axios from "axios";
import Album from "./Album/Album";

const Albums = (props) => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get(
            'api/albums/' + props.userID, {withCredentials: false}
        )
            .then((response) => {
                const allAlbums = response.data;
                setAlbums(allAlbums);
            });
    }, [setAlbums]);

    const albumsFromLocalState = albums.map((album) => <Album albumTitle={album.title} albumID={album.albumId}/>);

    return (
        <li>
                {albumsFromLocalState}
        </li>
    );
};

export default Albums;