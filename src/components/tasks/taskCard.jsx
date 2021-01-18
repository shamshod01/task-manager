import React, {useState} from 'react'
import {Button, Card, Switch, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {editTask} from "../../redux/task/task.reducer";

const TaskCard = ({task, currentQueryParams}) => {
    const userToken = useSelector(state => state.userPage.userToken)
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState(false)
    const [taskText, setTaskText] = useState(task.text)
    const [status, setStatus] = useState(task.status)
    const handleEdit = () => {
        setIsEdit(prev => !prev)
        if(isEdit) {
           taskText.length>0&&dispatch(editTask({id:task.id, text: taskText, status}, userToken,currentQueryParams))
        }
    }


    return <Card
        hoverable
        style={{width: "100%", height: "auto", border: `4px solid ${task.status===0?'red':'green'}`}}
        cover={task.image_path ?
            <img alt="TaskPhoto" style={{maxHeight: "160px"}} src={task.image_path}/> :
            <img alt="smallPhoto" style={{maxHeight: "160px"}}
                 src={`https://source.unsplash.com/1600x900/?${task.text}`}/>}
    >
        <h4>username: {task.username.replaceAll("&gt;", ">").replaceAll("&lt;", "<").replace( /(<([^>]+)>)/ig, '')}</h4>
        <br/>
        <h4>email: {task.email}</h4>
        <br/>
        {isEdit?<div>
            <Input.TextArea value={taskText} onChange={(e) => {
                setTaskText(e.target.value)
            }}/>
            Task has done: <Switch checked={status === 10} onChange={() => {
            status === 10 ? setStatus(0) : setStatus(10)
        }} />
        </div>:<div>
            {task.status === 0 ? 'Task is :' : 'Task was :'} <span dangerouslySetInnerHTML={{__html: task.text}}/>
            <hr/>
            <span>status: {task.status === 0 ? 'Let`s do it' : 'It was great job'}</span>
        </div>}
        <br/>
        {userToken&&<Button type={'primary'} onClick={handleEdit}>{isEdit ? 'Submit' : 'Edit'}</Button>}
    </Card>
}

export default TaskCard
