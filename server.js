const express = require('express');
const cp = require('child_process');
const path = require('path');
const next = require('next');
const { publicRuntimeConfig, serverRuntimeConfig } = require('./next.config');
// const { DevProxy } = require('./constants/ProxyConfig');

const { isDev } = publicRuntimeConfig;
const { PORT } = serverRuntimeConfig;

const dev = isDev;

const app = next({ dev });
const handle = app.getRequestHandler();


const devProxy = {
  '/api/content': {
    // target: 'http://localhost:3001',
    target: 'https://api.memokit.me',
    // pathRewrite: { '^/api': '/' },
    changeOrigin: true
  },
  '/api/auth/refresh-token': {
    // target: `https://api.memokit.me:3002`,
    target: 'https://api.memokit.me',
    changeOrigin: true
  },
  '/api/auth/access-token': {
    // target: `https://api.memokit.me:3002`,
    target: 'https://api.memokit.me',
    changeOrigin: true
  },
}

app.prepare()
  .then(() => {
    const server = express();
    console.log(devProxy);
    
    if (dev && devProxy) {
      console.log("++++++ XHR +++++++");
      const proxyMiddleware = require('http-proxy-middleware')
      Object.keys(devProxy).forEach(function (context) {
        console.log(context);
        
        server.use(proxyMiddleware(context, devProxy[context]))
      })
      console.log("++++++ End XHR +++++++");
    }

    server.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });

    // deal /favicon.ico
    server.get('/favicon.ico', (req, res) =>
      res.sendFile(path.join(__dirname, 'static', 'favicon.ico'))
    );

    // server.get('/user/detail/:username', (req, res) => {
    //   const { username } = req.params;
    //   return app.render(req, res, '/user/detail', { username });
    // });

    server.get('*', (req, res) => {
      //onst isXhr = req.xhr;
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      const serverUrl = `http://localhost:${PORT}`;
      console.log(`> Ready on ${serverUrl}`);
      // 开发环境自动启动
      if (dev) {
        switch (process.platform) {
          //mac系统使用 一下命令打开url在浏览器
          case 'darwin':
            cp.exec(`open ${serverUrl}`);
            break;
          //win系统使用 一下命令打开url在浏览器
          case 'win32':
            cp.exec(`start ${serverUrl}`);
            break;
          // 默认mac系统
          default:
            cp.exec(`open ${serverUrl}`);
        }
      }
    });
  });

