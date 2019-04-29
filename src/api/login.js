import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:96'
// axios.defaults.headers.common['Authorization'] = 'token'

// 目前 登录退出 使用mock代理
export function login(userInfo) {
  return axios.post('/login/login', userInfo)
}

export function userInfo() {
  return axios.post('/user/getInfo')
}

export function logout() {
  return axios.post('/login/logout')
}
