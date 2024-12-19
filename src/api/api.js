import axios from 'axios';
const token = '1|cqWFymIwIli5HIB2uNa0Cdgk36fwUmz4n83gKQcH89a3d628'
const http = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
    },
})
export default http;