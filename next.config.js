

module.exports = {
  reactStrictMode: true,
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            limit: 10000,
            mimetype: 'application/font-woff',
          },
        },
      ],
    },
  ]
}
