const path = require('path');
const merge = require('webpack-merge');
const pkg = require('./package.json');

module.exports = {
  title: pkg.name,
  components: './src/**/*.js',
  updateWebpackConfig(config) {
    return merge(
      config,
      {
        module: {
          loaders: [
            {
              test: /\.jsx?$/,
              include: path.join(__dirname, 'src'),
              loaders: ['babel-loader']
            }
          ]
        }
      }
    );
  },
  getExampleFilename() {
    return path.join(__dirname, 'README.md');
  },
  showCode: true
};
