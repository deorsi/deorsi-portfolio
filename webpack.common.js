const Webpack = require('webpack');
module.exports = {
  entry: {
    vendor: './src/vendor.js',
    main: './src/index.js',
    toggler: './src/toggler.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets'
            },
          },
        ],
      },
    ],
  },
  // This config allows to use jQuery $ sign
  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}