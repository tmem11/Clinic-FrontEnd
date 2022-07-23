import axios from "axios"

const axiosCookie = axios.create({
    // 
    // https://sprint-boot-ojt.herokuapp.com
    baseURL: "http://localhost:8080",
    withCredentials:true
})

export default axiosCookie
