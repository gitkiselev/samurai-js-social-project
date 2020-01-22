import {createStore, combineReducers} from 'redux';
import dialogsReducer from './dialogs-reducer.js';
import profileReducer from './profile-reducer.js';
import sidebarReducer from './sidebar-reducer.js';
import usersReducer from './users-reducer.js';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});
let store = createStore(reducers);
window.store = store;
export default store;