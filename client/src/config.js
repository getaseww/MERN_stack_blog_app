import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: "https://ethioblog.herokuapp.com/api/"
})