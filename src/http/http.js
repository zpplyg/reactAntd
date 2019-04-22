
import qs from 'qs';
import axios from 'axios';
import { BASE_URL } from './api';
import { message } from 'antd';
import { getCookie } from './cookieOld'



axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 60000;
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;


/**
 * 设置请求拦截器，添加token
 */
axios.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            config.data = qs.stringify(config.data)
        }
        // else if (config.method === 'get') {

        // }
        const token = getCookie('token')
        if (token) {
            config.headers['token'] = token;
        }

        // config.headers['X-Requested-With']='XMLHttpRequest';

        return config;
    },
    error => {
        message.error('请求出错' + error);
        return Promise.reject(error);
    }
)

/**
 * 设置相应拦截器
 */
axios.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        if (error && error.response) {
            if (error.response.status === 401) {
                // window.location.href = '/loginPage'
            } else if (error.response.status === 403) {
                // window.location.href = '/loginPage'
                // message.error("您没有权限")
            } else if (error.response.status === 404) {
                message.error("未找到请求路径")
            } else if (error.response.status === 500) {
                message.error("服务器出错了")
            } else {
                // message.error(error)
            }
        } else {
            message.error('请求出错')
        }

        return Promise.reject(error)
    }
)

/**
 * 用于并发请求，不直接使用
 * @param {请求地址} url 
 * @param {请求参数} params 
 */
const baseGet = (url, params = {}) => {
    return axios.get(url, { params: params })
}

/**
 * 用户并发请求，不直接使用
 * @param {请求地址} url 
 * @param {请求参数} data 
 */
const basePost = (url, data = {}) => {
    return axios.post(url, data)
}

/**
 * 并发请求
 * @param {请求数组[]} requests 
 */
const all = (requests) => {
    return new Promise((resolve, reject) => {
        axios.all(requests).then(axios.spread((...result) => {
            resolve([...result]);
        })).catch(error => {
            reject(error);
        })
    })
}

/**
 * 普通post请求
 * @param {请求地址} url 
 * @param {请求数据} data 
 */
const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            })

    })
}

/**
 * 普通get请求
 * @param {请求地址} url 
 * @param {请求参数} params 
 */
const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: params })
            .then(response => {
                resolve(response);
            }).catch(error => {
                reject(error)
            })

    })
}

/**
 * 普通get请求
 * @param {请求地址} url 
 * @param {请求参数} params 
 */
const urlGet = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            params: params
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })
    })
}

/**
 * 普通post请求
 * @param {请求地址} url 
 * @param {请求数据} data 
 */
const urlPost = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios({
            method:'post',
            url:url,
            data:data
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        })

    })
}

export default {
    post, get, baseGet, basePost, all,urlGet,urlPost
}
