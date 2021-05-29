import axios from 'axios'


export const axiosClient = axios.create({
    baseURL: 'http://localhost:4001',
    headers:{
        'Content-Type':'application/json'
    }
})