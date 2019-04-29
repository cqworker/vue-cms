import axios from 'axios'
import jsonp from '@/common/jsonp'
import { isDev } from '@/utils'

// 获取当前运行环境
// const isDev = getEnviroument()

export function getImage() {
  if(isDev) {
    // mock 代理
    return axios.get('/api/getMovieImage')
    // return axios.get('http://dianying.nuomi.com/common/ranklist')
  } else {
    // 根据环境参数决定 接口请求路径
    let url = 'https://api.douban.com/v2/movie/in_theaters'
    let option = {
      param: 'callback'
    }
    let data = {
      start: 0, // 数据的开始项
      count: 10, // 单页条数
      city: '深圳' // 城市
    }
    // 使用jsonp进行跨域
    return jsonp(url, data, option)
  }
}
