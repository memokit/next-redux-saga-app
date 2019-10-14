const withOffline = require('next-offline')
const withCss = require('@zeit/next-css')
const withImages = require('next-images')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production';

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

const srcFolder = [
  path.resolve('src/components'),
  // path.resolve('src/utils'),
  // path.resolve('src/pages'),
  // path.resolve('src/store')
  path.resolve('src')
]

const nextConfig = {
  cssModules: true,
  webpack: (config) => {
    const newConfig = { ...config }

    newConfig.plugins = [
      ...config.plugins,
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    ]

    if(isDev){
      newConfig.module.rules.push({
          test: /\.js$/,
          enforce: 'pre',
          include: srcFolder,
          options: {
            configFile: path.resolve('.eslintrc'),
            eslint: {
              configFile: path.resolve(__dirname, '.eslintrc')
            }
          },
          loader: 'eslint-loader'
        });
        newConfig.devtool = 'cheap-module-inline-source-map';
    }

    return newConfig
  }
}

module.exports = withOffline(withImages(withCss(nextConfig)))
