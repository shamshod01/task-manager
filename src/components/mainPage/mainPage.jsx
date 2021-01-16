import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import {Col, Layout, message, Row} from "antd";
import Login from "../login/login";
import TasksContainer from "../tasks/tasksContainer";
import s from './mainPage.module.css'

const MainPage = () => {
    const isFetching = useSelector(state => state.tasksPage.isFetching)
    useEffect(() => {
        isFetching && message.loading('Processing', 0.2)
    }, [isFetching])

    return (
        <Layout className={s.siteLayout}>
            <Layout.Content className={s.layoutShadow}>
               <Row>
                   <Col span={2}>
                       <Login/>
                   </Col>
                   <Col offset={8}>
                       <h1>WELCOME TO TASK-MANAGER</h1>
                   </Col>
                   <TasksContainer/>
               </Row>
            </Layout.Content>
        </Layout>
    )
}

export default MainPage