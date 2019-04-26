import axios from 'axios'

export function getHomeTotal() {
  //  网络请求的baseurl,和其他需要配置的东西在什么神仙地方呢?
  //  这里应该就是本应用的另一个url吧
  return axios.post('/homepage/hometotal')
}

export function getHomeDetailItem() {
  return axios.post('/homepage/detailItem')
}

export function getRank() {
  return axios.post('/homepage/investmentRank')
}
