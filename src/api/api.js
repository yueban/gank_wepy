import wepy from 'wepy'

const host = 'http://gank.io/api'
const wxRequest = async (url, params = {}) => {
  console.log(url)
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'application/json'
    }
  })
  console.log(res)
  return res
}

const getDataByCategory = (params) => wxRequest(host + '/data/' + params.query.category + '/' + params.query.count + '/' + params.query.page)

let Category = {
  all: 'all',
  meizi: '福利',
  Android: 'Android',
  iOS: 'iOS',
  relax: '休息视频',
  frontend: '前端',
  extend: '拓展资源'
}

module.exports = {
  getDataByCategory,
  Category
}
