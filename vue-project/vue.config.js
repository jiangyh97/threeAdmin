module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://118.24.25.7:5000',
                secure: false, // 如果是https接口，需要配置这个参数
                changeOrigin: true, //是否跨域
            }
        }
    }
}