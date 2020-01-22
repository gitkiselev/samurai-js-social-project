import dialogsReducer from './dialogs-reducer.js';
import profileReducer from './profile-reducer.js';
import sidebarReducer from './sidebar-reducer.js';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, How are you today', likesCount: 2},
                {id: 2, message: 'Hi, How are it\'s you today', likesCount: 12},
                {id: 3, message: 'My first post', likesCount: 12}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi it is 3 message'},
                {id: 2, message: 'Hi it is 2 message'},
                {id: 3, message: 'Hi it is 1 message'}
            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrei'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Valera'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('state was changed');
    },
    
    dispatch(action) {//{type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        
    }
}














window.store = store;
export default store;