import axios from 'axios'

axios.defaults.baseURL = '';
axios.defaults.timeout = '5000';
axios.defaults.headers.post['Content-Type'] = "application/json;charset=utf-8";

const NetWork = {};
let data1 = {};
let result = {};
NetWork.Success = "Success";//成功
NetWork.initData = function (obj) {
  console.log(obj,1111)
  data1 = {
    ClientMsg: {
      RequestAction: {
        Type: obj.actionHandler||'',
        Action: obj.actionMethod||'',
      },
      Body: obj.data ||''
    }
  };
  /* zip.generateAsync({type: "base64"}).then(function (res) {
     this.data = res;
   });
 */
  this.data =data1;
  this.url = obj.url;
  this.ContentType = obj.ContentType ||  "application/json;charset=utf-8";

};

NetWork.post = function (obj) {
  this.initData.call(this, obj);
  axios.defaults.headers['content-type']=this.ContentType;
  return new Promise((resolve, reject) => {
    axios.post(NetWork.url, JSON.stringify(NetWork.data))
      .then((res) => {
      console.log('success',111)
        if (res.data.ServerMsg.ReturnMsgCode == 0) {

          if (res.data.ServerMsg.RtnBizBody.RtnBizCode == NetWork.Success) {
            result.body = res.data.ServerMsg.RtnBizBody.Body;

            console.log(result,4445555,res.data.ServerMsg)
            resolve(result)
          } else {
            result.code = res.data.ServerMsg.RtnBizBody.RtnBizCode;
            result.msg = res.data.ServerMsg.RtnBizBody.RtnBizReason;
            result.shortMsg = res.data.ServerMsg.RtnBizBody.RtnBizMessage;
            reject(result)
          }
        } else {
          result.msg = res.data.ServerMsg.RtnBizBody.RtnBizReason;
          reject(result)
        }
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
