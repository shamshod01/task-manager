import {authAPI} from "../../api/api";
import {message} from "antd";

const SET_USER = 'SET_USER'
const LOG_OUT = 'LOG_OUT'

const initialState = {
    username: '',
    userToken: ''
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state,username: action.username, userToken: action.userToken}
        case LOG_OUT:
            return {...state, username: '', userToken: null}
        default:
            return state
    }
}

export const setUser = (username, userToken) => ({
    type: SET_USER, username, userToken
})

export const logOut = () => ({type: LOG_OUT})

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
