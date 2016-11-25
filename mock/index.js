const express = require('express');
const app = express();
const webpack = require('webpack')
const config = require('../build/webpack.dev.conf')
const compiler = webpack(config)
const routes = require('./routes/index');

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}))

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler))

app.use('/api', routes);

app.listen(8080);