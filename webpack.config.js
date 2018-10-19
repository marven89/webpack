const path = require('path');

module.exports = {
  entry: ['./src/index.js','./src/bar.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};