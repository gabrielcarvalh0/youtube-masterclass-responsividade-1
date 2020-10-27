const path = require('path');

module.exports = {
    devServer:{
contentBase: path.join(__dirname, PUBLIC_DIR),
port: 3340
    },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
   
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),

  },
  target: 'web'
};