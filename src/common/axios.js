import axios from 'axios';

const post = (url,data) => {
  return axios({
    method: 'post',
    url,
    data,
    withCredentials: true
  });
}

const get = (url) => {
  return axios({
    method: 'get',
    url,
    withCredentials: true
  })
}
export { post, get };