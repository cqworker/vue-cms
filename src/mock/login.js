// import Mock from 'mockjs'
import { userMap } from './user'

// mock中为入参自动添加了如url,type等标志
function login(userInfo) {
  // json.parse 作用?
  let { username } = JSON.parse(userInfo.body)
  // {xx} 直接转换为json 对象 {admin}
  return userMap[username]
}

function logout() {
  return 'success'
}

export { login, logout }
