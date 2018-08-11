const path = require('path');
const apiMocker = require('webpack-api-mocker');

module.exports = {
  devServer: {
    port: 3000,
    before(app){
      apiMocker(app, path.resolve('./mocker/index.js'))
    }
  }
}
