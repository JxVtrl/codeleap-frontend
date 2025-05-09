import axios from "axios"

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/careers/",
})

export const fetchPosts = () => api.get("/")
export const createPost = (data) => api.post("/", data)
export const updatePost = (id, data) => api.patch(`/${id}/`, data)
export const deletePost = (id) => api.delete(`/${id}/`)
