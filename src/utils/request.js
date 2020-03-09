import axios from 'axios'

// 创建axios实例
const service = axios.create({
    baseURL: '/',
    timeout: 1000 * 60 * 30
});

// request拦截器
service.interceptors.request.use(
    config => {
        // 添加tooken等信息
        return config;
    },
    error => {
        console.log(error);
        Promise.reject(error);
    }
);

// response拦截器
service.interceptors.response.use(
    response => {
        const code = response.status;
        console.log(response);
        if (code < 200 || code > 300) {
            alert(response.message);
            return Promise.reject('error');
        } else {
            return response.data;
        }
    },
    error => {
        let code = 0;
        try {
            code = error.response.data.status;
        } catch (error) {
            if (error.toString().indexOf('Error: timeout') !== -1) {
                alert('网络请求超时')
                return Promise.reject(error);
            }
            if (error.toString().indexOf('Error: Network Error') !== -1) {
                alert('网络请求错误');
                return Promise.reject(error);
            }
        }
        if (code === 401) {
            // 登录过期处理流程
        } else if (code === 403) {
            // 禁止访问
        } else {
            const errorMsg = error.response.data.message;
            if (errorMsg !== undefined) {
                alert(errorMsg);
            }
        }

        return Promise.reject(error);
    }
)

export default service;