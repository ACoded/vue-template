import axios from 'axios'

axios.defaults.baseURL = '';
axios.defaults.timeout = '5000';
axios.defaults.headers.post['Content-Type'] = "application/json;charset=utf-8";

const NetWork = {};


NetWork.post = function (obj) {
 
  axios.defaults.headers['content-type']=obj.ContentType;
  return new Promise((resolve, reject) => {
    axios.post(obj.url, JSON.stringify(obj.data))
      .then((res) => {
      console.log('success',111)
        
      }).catch((err) => {
      result.msg ='请求发送失败，请联系!'+err;
      reject(result)
    })
  })
};

NetWork.get = function (url, contentType) {

  axios.defaults.headers.get['Content-Type'] = contentType || "application/json;charset=utf-8";
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((res) => {
        if (res.data.ServerMsg.ReturnMsgCode == NetWork.Success) {
          resolve(res.data)
        } else {
          reject(res.data.ServerMsg.ReturnMsgCode)
        }
      }).catch((err) => {
      reject(err)
    })
  })
};

NetWork.init=function(config){
  console.log(config.headers.ticket,1111222)
  axios.defaults.baseURL = config.baseURL||'';
  axios.defaults.timeout = config.timeout||'5000';
  axios.defaults.headers.FRAME_SSO_TICKET=config.headers.ticket||'';
};
/*
axios.interceptors.request.use(config => {
  //拦截器

  if (config.method === 'post') {
    console.log(config.headers)
  }
  return config
}, err => {
  return Promise.reject(err)
});
*/

export default NetWork
