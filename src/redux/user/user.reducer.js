import {authAPI} from "../../api/api";
import {message} from "antd";
import {BroadcastChannel} from 'broadcast-channel';

const SET_USER = 'SET_USER'
const LOG_OUT = 'LOG_OUT'
const SET_TEXT_EDITED = 'SET_TEXT_EDITED'
const initialState = {
    username: '',
    userToken: '',
    textEditedTasks: []
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state,username: action.username, userToken: action.userToken}
        case LOG_OUT:
            return {...state, username: '', userToken: null, textEditedTasks: []}
        case SET_TEXT_EDITED:
            return {...state, textEditedTasks: [...state.textEditedTasks, action.id]}
        default:
            return state
    }
}

export const setUser = (username, userToken) => ({
    type: SET_USER, username, userToken
})

const logoutChannel = new BroadcastChannel('logout')
const setLogout = () => ({type: LOG_OUT})
export const logOut = () => async (dispatch) => {
    await dispatch(setLogout())
    await logoutChannel.postMessage();
}
export const logoutAllTabsListener = () => {
    logoutChannel.onmessage = event => {
        window.location.reload()
        logoutChannel.close();
    }
};
export const setTextEdited = (id) => ({type: SET_TEXT_EDITED, id})

export const login = (username, password) => async (dispatch) => {
    let res = await authAPI.login(username, password)
    if (res.status === 'ok') {
        dispatch(setUser(username, res.message.token))
        message.success(`Hello ${username}!`)
    } else {
        message.error("Invalid username or password. Please, try again")
    }
}

export default userReducer
