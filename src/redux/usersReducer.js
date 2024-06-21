const USERS_FETCH = 'USERS-FETCH';

const initialState = {
    users: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_FETCH:
            return {
                ...state,
                users: action.users
            };
    };
    return state;
};

export const usersFetchActinCreator = (users) => ({type: USERS_FETCH, users});