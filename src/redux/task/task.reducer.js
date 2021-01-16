import TASK_ACTION_TYPES from "./task.action-types";
import {tasksAPI} from "../../api/api";
import {message} from "antd";


let initialState ={
    tasks: [{
        username: '',
        email: '',
        text: '',
        status: 0
    }],
    pageNum: 1,
    sortField: 'username',
    sortDr: 'asc',
    isFetching: false,
    totalTaskCount: 4
}

const taskReducer = (state=initialState, action)=>{
    switch (action.type) {
        case TASK_ACTION_TYPES.SET_TASKS:
            return {...state, tasks: action.tasks}
        case TASK_ACTION_TYPES.SET_SORT_FIELD:
            return {...state, sortField: action.sort_field}
        case TASK_ACTION_TYPES.SET_SORT_DIRECT:
            return {...state, sortDr: action.sortDr}
        case TASK_ACTION_TYPES.TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TASK_ACTION_TYPES.SET_PAGE_NUM:
            return {...state, pageNum: action.pageNum}
        case TASK_ACTION_TYPES.SET_TOTAL_TASK_COUNT:
            return {...state, totalTaskCount: action.totalTaskCount}
        case TASK_ACTION_TYPES.ADD_TASK:
            return {...state, tasks: [action.task]}
        default:
            return state
    }
}

const setSortField = (sort_field) => ({type: TASK_ACTION_TYPES.SET_SORT_FIELD,sort_field})

const setSortDirect = (sortDr) => ({type: TASK_ACTION_TYPES.SET_SORT_DIRECT,sortDr})

const setPageNum = (pageNum) => ({type: TASK_ACTION_TYPES.SET_PAGE_NUM, pageNum})

const setTasks = (tasks) => ({type: TASK_ACTION_TYPES.SET_TASKS, tasks})

const toggleIsFetching = (isFetching) => ({type: TASK_ACTION_TYPES.TOGGLE_IS_FETCHING, isFetching})

const setTotalTasksCount = (totalTaskCount) => ({type: TASK_ACTION_TYPES.SET_TOTAL_TASK_COUNT, totalTaskCount})

const addTask = (task) => ({type: TASK_ACTION_TYPES.ADD_TASK, task})

//Thunks
export const requestTasks = (page,sf,sd) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setPageNum(page));
        dispatch(setSortField(sf));
        dispatch(setSortDirect(sd))
        let data = await tasksAPI.getTasks(page,sf,sd);
        dispatch(setTasks(data.message.tasks));
        dispatch(setTotalTasksCount(data.message.total_task_count));
        dispatch(toggleIsFetching(false));
    }
}

export const createTask = (task) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
    let data = await tasksAPI.createTask(task)
        dispatch(toggleIsFetching(false))
        if(data.status === 'ok') {
            dispatch(requestTasks(1,'id','desc'))
            message.success('Task Added')
        } else {
            message.error('Upss, something went wrong!')
        }
    }
}

export const editTask = (task, userToken, queryP) => {
    return async (dispatch) => {
        let data = await tasksAPI.editTask(task, userToken)
        if(data.status ==='ok') {
            dispatch(requestTasks(queryP.pageNum, queryP.sortField, queryP.sortDr))
            message.success('successfully edited')
        } else {
            message.error('Ups...Unexpected error!')
        }
    }
}

export default taskReducer
