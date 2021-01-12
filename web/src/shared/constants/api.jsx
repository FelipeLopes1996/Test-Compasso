import axios from 'axios'

const apiScience = axios.create({
    baseURL: 'http://localhost:3002'
})

export default apiScience