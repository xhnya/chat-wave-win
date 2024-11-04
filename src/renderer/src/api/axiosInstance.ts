// src/utils/axiosInstance.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// 创建 axios 实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 设置基础URL
  timeout: 5000, // 设置超时时间
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做一些处理，比如添加 token
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: any) => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据进行处理
    return response.data
  },
  (error: any) => {
    // 处理响应错误
    if (error.response) {
      // 可以根据状态码进行一些统一处理
      if (error.response.status === 401) {
        alert('未授权，请登录')
        // 可跳转到登录页面或其他逻辑
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
