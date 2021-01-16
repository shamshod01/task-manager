import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/v2/',
});

export const tasksAPI = {
    getTasks(currentPage = 1,sort_filed = 'username', sortDr = 'asc') {
        return instance.get(`?developer=Shamshod&sort_field=${sort_filed}&sort_direction=${sortDr}&page=${currentPage}`)
            .then(res => {
                return res.data;
            });
    },
    createTask(task) {
        const formData = new FormData()
        console.log(task.username)
        formData.append('username', task.username)
        formData.append('email', task.email)
        formData.append('text', task.text)
        return instance.post(`create/?developer=Shamshod`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            return res.data
        });
    },
    editTask(task,userToken) {
        const formData = new FormData()
        formData.append('token', userToken)
        formData.append('status', task.status)
        formData.append('text', task.text)
        return instance.post(`edit/${task.id}/?developer=Shamshod`,formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            return res.data
        })
    }
}
export const authAPI = {
    login(username, password) {
        const formData = new FormData();
        formData.append('username', username)
        formData.append('password', password)
        return instance.post(`login/?developer=Shamshod`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            return res.data
        });
    }
}

