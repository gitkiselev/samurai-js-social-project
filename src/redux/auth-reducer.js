import {authAPI} from '../api/api.js';
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                    ...state,
                    ...action.payload,
                    isAuth: true
            }
        default:
            return state;
    } 
}
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, payload: {userId, email, login}});

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    console.log(this)
                    dispatch(setAuthUserData(id, email, login));
                }
            })
}



export default authReducer;