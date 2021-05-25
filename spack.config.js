const path = require('path');
const { config } = require('@swc/core/spack')

module.exports = config({
  entry: {
    'main': __dirname + '/ui/index.js',
  },
  output: {
    path: path.join(__dirname, "builds", "ui"),
  },
  module: {},
});
