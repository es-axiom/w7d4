## Pokedex

### Ventures into React / Redux

A fun little project combining the wonderful world of Pokemon(sters) with React components and Redux state.

__Week 7 Day 4 - App Academy__

- Learning how to set up webpack using Babel, Node.js, React, ES6.
- Ignoring `.js` and `.jsx` file extensions to clean up imports.
- Using source-maps to map erros to their corresponding line in the original pre-transpiled/minified code.

```javascript
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/pokedex.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      }
    ]
  },
  devtool: 'source-maps'
};
```
