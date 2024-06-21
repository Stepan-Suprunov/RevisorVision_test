const USERS_FETCH = 'USERS-FETCH';

const initialState = {};

export const usersReducer = (state = initialState, action) => {
    return state;
};

export const usersFetchActinCreator = (users) => ({type: USERS_FETCH, users});