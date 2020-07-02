// HTTP JS
import axios from 'axios'

// create a new axios instance
const http = axios.create({
    baseURL: '' // api base url
})

// before a request is made start the nprogress
http.interceptors.request.use((config) => {
    // Do something before request is sent
    return config
}, (error) => {
    // Do something with request error
    return Promise.reject(error)
});

// before a response add a response interceptor
http.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
})

export default http
