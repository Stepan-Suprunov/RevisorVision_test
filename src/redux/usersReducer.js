const USERS_FETCH = 'USERS-FETCH';

const initialState = [];

export const usersReducer = (state = initialState, action) => {
    console.log(action, 'экшоны приходящие в редюсер');
    switch (action.type) {
        case USERS_FETCH:
            return ([
                ...action.users
            ]);
    };
    return state;
};

export const usersFetchActionCreator = (users) => ({type: USERS_FETCH, users});