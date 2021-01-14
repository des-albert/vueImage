module.exports = {
    "transpileDependencies": [
        "vuetify"
    ]
}
module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 8080,
        public: '0.0.0.0:8080'
    },
    publicPath: "/"
};

const path = require('path');
const PrerenderSPAPlugin =  require('prerender-spa-plugin');

module.exports = {
  runtimeCompiler:true,
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [ '/', '/signin', '/signup', '/post', '/posts', '/profile'  ]
      })
    ],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      }
    }
  }

};
