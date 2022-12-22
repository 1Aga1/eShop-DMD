import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true
})

const request = {
    get: (url) => api.get(url),
    post: (url, data) => api.post(url, data)
}

const User = {
    register: (username, email, password) => request.post('/register', {
        username: username,
        email: email,
        password: password
    }),

    auth: (username, password) => request.post('/user/auth', {
        username: username,
        password: password
    }),

    verify: () => request.get('/user/check')
}

const exportedObjects = {
    User
}

export default exportedObjects