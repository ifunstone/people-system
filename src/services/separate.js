import request from '../utils/request';

const BASE_PATH = '/ctm01jajsgarhfl/web';

export function typeList() {
  return request(BASE_PATH + '/separate/type/list');
}

export function pageList(options) {
  return request(BASE_PATH + '/separate/page', options);
}