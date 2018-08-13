const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr']
    }
  },
  alias: {
    assets: path.resolve(__dirname, 'src/assets/'),
    components: path.resolve(__dirname, 'src/components/'),
    languages: path.resolve(__dirname, 'src/languages/'),
    models: path.resolve(__dirname, 'src/models/'),
    routes: path.resolve(__dirname, 'src/routes/'),
    services: path.resolve(__dirname, 'src/services/'),
    utils: path.resolve(__dirname, 'src/utils/')
  },
  ignoreMomentLocale: true,
  theme: './src/theme.js',
  html: {
    template: './src/index.ejs'
  },
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  disableDynamicImport: false,
  publicPath: '/',
  hash: true
};
