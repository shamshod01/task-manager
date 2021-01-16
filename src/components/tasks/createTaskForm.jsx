import React from 'react'
import {useDispatch} from "react-redux";
import {createTask} from "../../redux/task/task.reducer";
import  { Col,Form, Input, Button } from 'antd';

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 24,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
};

const CreateTaskForm = () => {
    const onFinish = (values) => {
        dispatch(createTask(values))
        form.resetFields()
    };
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    return <div>
        <br/>
        <Col offset={8}>
            <h2>Add Your Task</h2>
        </Col>
        <Form {...layout} initialValues={{username:null, email: null, text: null}} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={'username'}
                label={<h3>Name</h3>}
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='email'
                label={<h3>Email</h3>}
                rules={[
                    {
                        type: 'email',
                        required: true
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name={'text'} label={<h3>Text</h3>}
                       rules={[
                           {
                               required: true
                           },
                       ]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default CreateTaskForm