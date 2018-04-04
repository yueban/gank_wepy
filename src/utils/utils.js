import api from '../api/api'

function encodeParam(param) {
  return encodeURIComponent(JSON.stringify(param))
}

function decodeParam(param) {
  return JSON.parse(decodeURIComponent(param))
}

function getImageUrl(item) {
  if (item.type === api.Category.meizi) {
    return item.url
  }
  if (item.images && item.images.length > 0) {
    return item.images[0]
  }
  return ''
}

module.exports = {
  encodeParam,
  decodeParam,
  getImageUrl
}
