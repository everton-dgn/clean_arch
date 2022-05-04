require('dotenv').config()
const common = require('./common.js')

module.exports = common({
  mode: 'development',
  port: process.env.PORT,
  publicPath: `http://localhost:${process.env.PORT}/`
})
