import axios from 'axios';
const token = '3|2hAftJ7wCb76HTJYMwu8lOWdlHx9ym1J5KvcNLvUce23c54f'
const http = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
})
export default http;