import Favourite from "./Favourite/Favourite";

const Favourites = (props) => {

    if (props.action) {
        props.addPictureActionCreator(props.photo);
    };
    if (!props.action) {
        props.removePictureActionCreator(props.photo);
    };

    if (props.favourites !== undefined && props.favourites !== null) {
        return (
            props.favourites.map((photo) => <Favourite key={photo.id} photoURL={photo.url}/>)
        );
    } else return (
      <span>Favourites</span>
    );
};

export default Favourites;