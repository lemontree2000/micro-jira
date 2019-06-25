module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/map': {
        target: 'http://api.map.baidu.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/map': '/'
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugin('fork-ts-checker').tap(([options]) => {
      return [
        {
          //一下几项都是推荐配置，async false使其可以在 页面上显示
          async: false,
          tslint: true,
          vue: true
        }
      ]
    })
  }
}
