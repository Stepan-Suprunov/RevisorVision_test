const ADD_PICTURE = 'ADD-PICTURE';
const REMOVE_PICTURE = 'REMOVE-PICTURE';

const initialState = [];

export const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PICTURE: {
            let stateCopy = [...state];
            let flag = false;
            for (let i = 0; i < stateCopy.length; i++) {
                if (stateCopy[i].id === action.picture.id) flag = true;
            };
            if (flag) stateCopy.append(action.picture);

            return stateCopy;
        };

        case REMOVE_PICTURE: {
            let stateCopy = state.filter(picture => picture.id !== action.picture.id);

            return stateCopy;
        };

        default:
            return state;
    };
};

export const addPictureActionCreator = (picture) => ({type: ADD_PICTURE, picture});
export const removePictureActionCreator = (picture) => ({type: ADD_PICTURE, picture});