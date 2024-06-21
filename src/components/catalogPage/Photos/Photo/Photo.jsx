const Photo = (props) => {
    return (
        <li>
            <img src={props.photoURL} alt="photo"/>
        </li>
    );
};

export default Photo;