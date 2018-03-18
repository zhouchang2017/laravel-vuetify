const path = require('path')
const webpack = require('webpack')
const mix = require('laravel-mix')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix
.js('resources/assets/js/app.js', 'public/js')
.stylus('resources/assets/stylus/app.styl', 'public/css')
.disableNotifications()
.copyDirectory('resources/assets/img', 'public/img')

if (mix.inProduction()) {
  mix.version()

  mix.extract([
    'vue',
    'vform',
    'axios',
    'vuex',
    'vue-i18n',
    'vue-meta',
    'js-cookie',
    'vue-router',
    'vuetify',
    'vee-validate',
    'vuex-router-sync'
  ])
  mix.webpackConfig({
    plugins: [
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]', //目标文件名
        algorithm: 'gzip', //使用gzip压缩
        threshold: 10240, //资源文件大于10240B=10kB时会被压缩
        // minRatio: 0.8 //最小压缩比达到0.8时才会被压缩
      })
    ]
  })
} else {
  mix.sourceMaps()
}

mix.webpackConfig({
  output: {
    // chunkFilename: 'js/[id].[chunkhash].js',
    chunkFilename: 'js/[id].js',
    publicPath: '/'
  },
  plugins: [],
  resolve: {
    alias: {
      '~': path.join(__dirname, './resources/assets/js')
    }
  }
})
