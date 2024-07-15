import React, {useEffect, useState} from "react";
import axios from "axios";
import Album from "./Album/Album";

type Props = {
    userID: string
};

type AlbumsType = {
    albumId: string
    userId: string
    title: string
};

const Albums: React.FC<Props> = (props) => {

    const [albums, setAlbums] = useState<AlbumsType[]>([]);

    useEffect(() => {
        axios.get(
            'api/albums/' + props.userID
        )
            .then((response) => {
                const allAlbums = response.data;
                setAlbums(allAlbums);
            });
    }, [setAlbums]);

    return (
        <li>
            {albums.map((album) => <Album key={album.albumId} albumTitle={album.title} albumID={album.albumId}/>)}
        </li>
    );
};

export default Albums;