// 后端请求地址注意：会根据环境加载不同的 env 文件

/**
 * 将相对路径解析为基于项目根目录的绝对路径
 * @param {string} dir 相对目录名
 * @returns {string} 绝对路径
 */
const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  filenameHashing: true,
  lintOnSave: false,
  // 打包时不生成 .map 文件
  productionSourceMap: false,
  /**
   * 合并 webpack 配置：TS/Pug 规则、性能提示、生产环境去掉 console
   * @param {object} config webpack 配置对象
   */
  configureWebpack: (config) => {
    config.performance = {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      /**
       * 仅对 js 资源给出体积提示
       * @param {string} assetFilename 资源文件名
       * @returns {boolean}
       */
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
    config.resolve = config.resolve || {}
    // 必须包含 .vue，否则无后缀导入组件会解析失败
    config.resolve.extensions = ['.vue', '.ts', '.tsx', '.js', '.json']
    config.module = config.module || {}
    config.module.rules = (config.module.rules || []).concat([
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      }
    ])
    if (process.env.NODE_ENV === 'production') {
      const minimizer = config.optimization && config.optimization.minimizer
      if (minimizer && minimizer[0] && minimizer[0].options) {
        minimizer[0].options.terserOptions.compress.drop_console = true
      }
    }
  },
  /**
   * 配置路径别名，便于业务代码引用
   * @param {object} config webpack-chain 配置
   */
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('api', resolve('src/api'))
  },
  // webpack-dev-server 相关配置
  devServer: {
    host: 'localhost',
    port: 8080,
    https: false,
    open: true,
    hotOnly: true,
    proxy: {
      '/link': {
        target: 'http://wanghuo.developerplat.com/',
        changeOrigin: true,
        secure: true,
        pathRewrite: {
          '/link': ''
        }
      }
    }
  },
  // PWA 图标配置
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  }
}
