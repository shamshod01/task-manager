import React, {useEffect} from 'react'
import  {Pagination,Button, Col,Row,Select } from 'antd'
import TaskCard from "./taskCard";
import {useDispatch, useSelector} from "react-redux";
import {requestTasks} from "../../redux/task/task.reducer";
import CreateTaskForm from "./createTaskForm";

const { Option } = Select;

const TasksContainer = ( ) => {
    const tasks = useSelector(state => state.tasksPage.tasks)
    const pageNum = useSelector(state => state.tasksPage.pageNum)
    const sortField = useSelector(state => state.tasksPage.sortField)
    const sortDr = useSelector(state => state.tasksPage.sortDr)
    const totalTaskCount = useSelector(state => state.tasksPage.totalTaskCount)
    const dispatch = useDispatch()

    const handleSortField = (e) => {
        dispatch(requestTasks(pageNum,e,sortDr))
    }
    const handleSortDr = () => {
        let newSortDr = sortDr==='asc'?'desc':'asc'
        dispatch(requestTasks(pageNum,sortField,newSortDr))
    }

    useEffect(()=>{
        dispatch(requestTasks(1))
    },[dispatch])

    return <div>
        <Row justify={'center'} gutter={[8, 8]}>
           <Col>
               <h3>You can sort by: </h3>
           </Col>
            <Col>
                <Select defaultValue={sortField} style={{width: 120}} onChange={handleSortField}>
                    <Option value="username">username</Option>
                    <Option value="email">email</Option>
                    <Option value="status">status</Option>
                </Select>
            </Col>
            <Col>
                <h3> and by </h3>
            </Col>
            <Col>
                <Button type={'primary'} shape={'round'} onClick={handleSortDr}>{sortDr === 'asc' ? 'asc' : "desc"}</Button>
            </Col>
        </Row>
        <br/>
        <Row justify={'center'} gutter={[8,8]}>
            {tasks.map(t => <Col xs={24} md={12} lg={6}  key={t.id}>
                <TaskCard key={`${t.id} ${t.text}`} task={t} currentQueryParams={{pageNum, sortField, sortDr}}/>
            </Col>)}
            <Col xs={24} md={12} lg={6} >
                <CreateTaskForm/>
            </Col>
        </Row>
        <br/>
        <Row justify={'center'}>
            <Col offset={2}>
                <Pagination current={pageNum} total={totalTaskCount} pageSize={3} onChange={(p) => {
                    dispatch(requestTasks(p, sortField, sortDr))
                }}/>
            </Col>
        </Row>
    </div>
}

export default TasksContainer
