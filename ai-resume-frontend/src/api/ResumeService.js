import axios from 'axios'

export const baseURL="http://localhost:8080/api/v1"

export const axiosInstance = axios.create({
    baseURL:baseURL
})

export const generateResume=async(description)=>{
    const response = await axiosInstance.post("/resume/generate",{
        userDescription:description
    })

    return response.data
}