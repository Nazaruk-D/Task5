import axios from 'axios'


export const instance = axios.create({
    // baseURL: "https://task4-backend-i61sofhvl-nazaruk-d.vercel.app/",
    baseURL: 'http://localhost:7542/',
    withCredentials: true,
})
