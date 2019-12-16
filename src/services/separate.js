import request from '../utils/request';

const BASE_PATH = '/ctm01jajsgarhfl/web';

function querystring(obj) {
  let arr = [];
  for (var i in obj) {
    arr.push(`${i}=${obj[i]}`);
  }
  return arr.join('&');
}

export function typeList() {
  return request(BASE_PATH + '/separate/type/list');
}

export function pageList(options) {
  return request(BASE_PATH + '/separate/page' + (options ? ('?' + querystring(options)) : ''));
}