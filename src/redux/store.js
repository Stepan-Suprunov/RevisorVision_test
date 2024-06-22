import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./usersReducer";
import {favouritesReducer} from "./favouritesReducer";

const reducers = combineReducers({
    users: usersReducer,
    favourites: favouritesReducer

});

const store = configureStore({reducer: reducers});

export default store;