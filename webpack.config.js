module.exports = {
  entry: {
    main: "./client.js"
  },

  output: {
    filename: "[name].js"
  },

  mode: process.env['NODE_ENV'] || 'development',
  devtool: process.env['NODE_ENV'] === 'production' ? false : 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: "ts-loader" }
        ]
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: ["src", "node_modules"]
  }
}
