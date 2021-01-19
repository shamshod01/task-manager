import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import taskReducer from "./task/task.reducer";
import userReducer from "./user/user.reducer";

let reducers = combineReducers({
    tasksPage: taskReducer,
    userPage: userReducer
})
const persistedState = localStorage.getItem('reduxState')?JSON.parse(localStorage.getItem('reduxState')):null;
let store;
if(persistedState){
    store = createStore(reducers, { ...reducers, userPage:persistedState}, applyMiddleware(thunkMiddleware))
}else{
    store = createStore(reducers, { ...reducers}, applyMiddleware(thunkMiddleware))
}

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState().userPage))
})

export default store
