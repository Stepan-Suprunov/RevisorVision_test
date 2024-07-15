const USERS_FETCH = 'USERS-FETCH';

export type Users = {
    id: string
    name: string
    username: string
    email: string
};

const initialState : Users[] = [];

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USERS_FETCH:
            return ([
                ...action.users
            ]);
    };
    return state;
};

export const usersFetchActionCreator = (users) => ({type: USERS_FETCH, users});