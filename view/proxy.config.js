const proxy = [
  {
    context:'/api/v1',
    target:'https://traineeprominas-jjmg-sandbox.herokuapp.com/api/v1',
    pathRewrite:{'^/api/v1': ''}
  }
];
module.exports = proxy;
