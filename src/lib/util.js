import axios from 'axios'

let util={

};

util.title=function (title) {
  title=title||'个人电子发票应用';
  window.document.title=title;
};

util.ajax = axios.create({
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  baseURL: 'http://10.254.2.162',
  timeout: 30000
});
export default util;
