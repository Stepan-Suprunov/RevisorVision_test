const ADD_PICTURE = 'ADD-PICTURE';
const REMOVE_PICTURE = 'REMOVE-PICTURE';

export type PhotoType = {
    albumId: string
    id: string
    title: string
    url: string
};

const initialState: PhotoType[] = [];

export const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PICTURE: {

            if (state.find(picture => picture.id === action.picture.id)) {
                return state;
            };
            return [...state, action.picture];
        };

        case REMOVE_PICTURE: {
            const stateCopy = state.filter(picture => picture.id !== action.picture.id);

            return stateCopy;
        };

        default:
            return state;
    };
};

export const addPictureActionCreator = (picture) => ({type: ADD_PICTURE, picture});
export const removePictureActionCreator = (picture) => ({type: REMOVE_PICTURE, picture});