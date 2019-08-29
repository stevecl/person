// vue.config.js
module.exports = {

  // publicPath: '/',
  // outputDir: 'dist',
  // assetsDir: '',
  // indexPath: 'index.html',
  productionSourceMap: false, // 生产环境source map
  devServer: {

    // host: 'localhost',
    // port: 3000,
    // https: true,
    open: true,
    overlay: {
      warnings: false,
      errors: false
    }

    // index: 'index.html',
    // publicPath: '/',
    // proxy: {}
  }
}
