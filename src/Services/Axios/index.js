import axios from "axios"

const axios_instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDM3MjhiYWI5Njk4ZWZiODlhZWMzNDE3YzZlNDgzOSIsInN1YiI6IjYxMzg3ZTNkZjI5ZDY2MDA0NGQzZDEyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l9G88xmJMNCd1ZefGo1z52rba8vjOG2Lc-ucpY7iyJQ`
    }
})  
export default axios_instance