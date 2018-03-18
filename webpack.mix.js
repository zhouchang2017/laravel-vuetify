const path = require('path')
const webpack = require('webpack')
const mix = require('laravel-mix')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

mix
.js('resources/assets/js/app.js', 'public/js')
.stylus('resources/assets/stylus/app.styl', 'public/css')
.disableNotifications()
.copyDirectory('resources/assets/img', 'public/img')

if (mix.inProduction()) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')
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
    'vuex-router-sync',
    'vue2-editor'
  ])
  mix.webpackConfig({
    plugins: [
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          ['js', 'css'].join('|') +
          ')$'
        ),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  })
} else {
  mix.sourceMaps()
}

mix.webpackConfig({
  output: {
    chunkFilename: 'js/[id].[chunkhash].js',
    // chunkFilename: 'js/[id].js',
    // file: 'js/[name].[chunkhash].js',
    publicPath: '/'
  },
  plugins: [],
  resolve: {
    alias: {
      '~': path.join(__dirname, './resources/assets/js')
    }
  }
})
