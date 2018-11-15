module.exports = {
    proxy: {
          '/apis': {    //将www.exaple.com印射为/apis
              target: 'http://192.168.20.125',  // 接口域名
              changeOrigin: true,  //是否跨域
              pathRewrite: {
                  '^/apis': ''   //需要rewrite的,
              }              
          },
          '/api': {    //将www.exaple.com印射为/apis
              target: 'http://192.168.20.177:8181',  // 接口域名
              changeOrigin: true,  //是否跨域
              pathRewrite: {
                  '^/api': ''   //需要rewrite的,
              }              
          }
    }
  }