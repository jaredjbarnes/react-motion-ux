// webpack.config.js
require('dotenv').config()

module.exports = async ({ config }) => {
  //ability to turn off HMR with an envar
  if (process.env.DISABLE_HMR === 'true') {
    config.entry = config.entry.filter(singleEntry => !singleEntry.includes('/webpack-hot-middleware/'))
  }

  return config
}