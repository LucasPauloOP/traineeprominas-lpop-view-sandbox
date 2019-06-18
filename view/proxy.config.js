const proxy = [
  {
    context: '/api',
    target: 'http://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1',
    pathRewrite: {'^/api' : ''},
    port: 443,
    secure: false,
    changeOrigin: true
  }
];

module.exports = proxy;
