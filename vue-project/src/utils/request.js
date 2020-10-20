import axios from "axios"
let server= axios.create({
    baseURL:'/',
    timeout: 6000,
    // headers:{'X-Custom-Header':'ahong'}

})

// 请求拦截器，每次发请求都会先执行的回调函数
server.interceptors.request.use(function(config){
    console.log(config)
    let token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`
    return config
    
},function(error) {
    console.log('发送出错')
    Promise.reject(error)
})

// 响应拦截器，相应成功后，把数据返回之前，执行的回调函数
server.interceptors.response.use(function(response) {
    console.log('request页面输出：响应成功')
    console.log('request页面输出',response)

    return response
},function(error) {
    console.error('响应出错')
    Promise.reject(error)
})


export default server