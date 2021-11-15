import axios from 'axios'; 

const ajax = axios.create({
  baseURL: '/api',
  timeout: 3000
});

//添加拦截
ajax.interceptors.request.use(
  (config) => { 
    return config;
  },
  (error) => {
    console.log(error);
  }
);

ajax.interceptors.response.use(
  (res: any) => { 
    if (res.status === 200) {
      return Promise.resolve(res.data);
    } else {
      return Promise.reject(res.data);
    }
  },
  (error) => {
    // store.commit('setLoading', false)
    const { response } = error;
    if (response) {
      return Promise.reject(response.data);
    } else {
      throw '网络连接异常,请稍后再试!';
    }
  }
);

export default ajax;
