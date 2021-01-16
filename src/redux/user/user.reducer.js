import {authAPI} from "../../api/api";
import {message} from "antd";

const SET_USER = 'SET_USER'

const initialState = {
    username: '',
    userToken: ''
}

const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state,username: action.username, userToken: action.userToken}
        default:
            return state
    }
}

export const setUser = (username, userToken) => ({
    type: SET_USER, username, userToken
})

export const login = (username, password) => async (dispatch) => {
    let res = await authAPI.login(username, password)
    if (res.status === 'ok') {
        dispatch(setUser(username, res.message.token))
        message.success(`Hello ${username}!`)
    } else {
        message.error("Something went wrong. Please, try again")
    }
}

export default userReducer