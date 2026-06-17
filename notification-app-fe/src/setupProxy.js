const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  console.log("Proxy Loaded");

  app.use(
    '/evaluation-service',
    createProxyMiddleware({
      target: 'http://4.224.186.213',
      changeOrigin: true,
      logLevel: 'debug'
    })
  );
};