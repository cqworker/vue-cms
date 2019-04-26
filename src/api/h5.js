import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:96'
axios.defaults.headers.common['Authorization'] = 'token'

export function getHospital () {
  return axios.post('/hospital/list', {
    size: '10',
    page: '1',
    productId: 'taibao-cfyw'
  }).then(function (response) {
    console.log(response)
  })
    .catch(function (error) {
      console.log(error)
    })
}

export function getHospitalqrcode () {
  return axios.get('/hospital/qrcode').then(function (response) {
    console.log(response.status)
  }).catch(function (error) {
    console.log(error)
  })
}

export function getHospitalList (data) {
  return axios.post('/hospital/list', {
    productId: data.name,
    region: data.region
  }).then(function (response) {
    console.log(response)
  })
    .catch(function (error) {
      console.log(error)
    })
}
export function getHospitalCount () {
  return axios.get('/hospital/num').then(function (response) {
    console.log(response.status)
  }).catch(function (error) {
    console.log(error)
  })
}

export function getCompanyDate () {
  return axios.get('/company/num').then(function (response) {
    console.log(response.status)
  }).catch(function (error) {
    console.log(error)
  })
}

export function insuranceDate () {
  return axios.get('/insurance/num').then(function (response) {
    console.log(response.status)
  })
    .catch(function (error) {
      console.log(error)
    })
}
