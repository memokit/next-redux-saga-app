const lessToJS = require('less-vars-to-js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const fs = require('fs');
const withAntd = require('./next-antd.config');

const withOffline = require('next-offline')
const withCss = require('@zeit/next-css')
const withImages = require('next-images')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const path = require('path');


const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, './public/static/less/antd-custom.less'),
    'utf8',
  )
);

const isDev = process.env.NODE_ENV !== 'production';

// fix antd bug in dev development
const devAntd = '@import "~antd/dist/antd.less";\n';
const stylesData = fs.readFileSync(
  path.resolve(__dirname, './public/static/less/_styles.less'),
  'utf-8'
);

fs.writeFileSync(
  path.resolve(__dirname, './public/static/less/self-styles.less'),
  isDev ? `${devAntd}${stylesData}` : stylesData,
  'utf-8'
);

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {}
}

// if (typeof require !== 'undefined') {
//   require.extensions['.css'] = (file) => {}
// }

const srcFolder = [
  path.resolve('src/components'),
  // path.resolve('src/utils'),
  // path.resolve('src/pages'),
  // path.resolve('src/store')
  path.resolve('src')
]


const nextConfig = {
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    if (!dev) {
      config.plugins.push(
        ...[
          new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
            generateStatsFile: true,
            // Will be available at `.next/stats.json`
            statsFilename: 'stats.json'
          }),
          // 代替uglyJsPlugin
          new TerserPlugin({
            cache: true,
            terserOptions: {
              ecma: 6,
              warnings: false,
              extractComments: false, // remove comment
              compress: {
                drop_console: true // remove console
              },
              ie8: false
            }
          }),
      ]);
      config.module.rules.push({
        test: /\.js$/,
        include: srcFolder,
        options: {
          workerParallelJobs: 50,
          // additional node.js arguments
          workerNodeArgs: ['--max-old-space-size=1024'],
        },
        loader: 'thread-loader'
      });
      config.devtool = 'source-map';
    } else {
      config.module.rules.push({
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
      config.devtool = 'cheap-module-inline-source-map';
    }
    return config;
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // console.log(config, '@@')
    // Important: return the modified config
    return config;
  },
  serverRuntimeConfig: { // Will only be available on the server side
    rootDir: path.join(__dirname, './'),
    PORT: isDev ? 3006 : (process.env.PORT || 5999)
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/public',
    isDev, // Pass through env variables
    host: 'https://memokit.me'
  },
  env: {
    SERVER_HOST: 'https://memokit.me'
  }
}


module.exports = withOffline(withImages(withAntd(nextConfig)))


// const nextConfig = {
//   cssModules: true,
//   webpack: (config) => {
//     const newConfig = { ...config }

//     newConfig.plugins = [
//       ...config.plugins,
//       new FilterWarningsPlugin({
//         exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
//       })
//     ]

//     if(isDev){
//       newConfig.module.rules.push({
//           test: /\.js$/,
//           enforce: 'pre',
//           include: srcFolder,
//           options: {
//             configFile: path.resolve('.eslintrc'),
//             eslint: {
//               configFile: path.resolve(__dirname, '.eslintrc')
//             }
//           },
//           loader: 'eslint-loader'
//         });
//         newConfig.devtool = 'cheap-module-inline-source-map';
//     }

//     return newConfig
//   }
// }

// module.exports = withOffline(withImages(withCss(nextConfig)))
