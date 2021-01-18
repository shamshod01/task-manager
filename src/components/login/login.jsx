import React, {useState} from 'react'
import {Drawer, Button} from 'antd';
import {Form, Input} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {login, logOut} from "../../redux/user/user.reducer";

const Login = () => {
    const [showModal, setShowModal] = useState(false)
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const onFinish = (values) => {
        dispatch(login(values.username, values.password))
        form.resetFields()
        setShowModal(false)
    };
    const username = useSelector(state => state.userPage.username)

    return (
        <>
            {username.length > 1 ? <Button type="primary" ghost onClick={() => dispatch(logOut())}>
                logout
            </Button> : <Button type="primary" onClick={() => setShowModal(true)}>
                login
            </Button>}
            <Drawer
                title="LogIn"
                placement={'right'}
                closable={false}
                width={'30%'}
                onClose={() => {
                    setShowModal(false)
                }}
                visible={showModal}
            >
                <Form
                    form={form}
                    name="basic"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
}

export default Login
