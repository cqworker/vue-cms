// import Mock from 'mockjs'
import { userMap } from './user'

// mock的神仙模拟请求返回
function login(userInfo) {
  let { username } = JSON.parse(userInfo.body)
  return userMap[username]
}

function logout() {
  return 'success'
}

export { login, logout }
