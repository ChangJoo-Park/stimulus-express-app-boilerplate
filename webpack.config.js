module.exports = {
  entry: {
    main: "./client.js"
  },

  output: {
    filename: "[name].js"
  },

  mode: "production",
  devtool: "inline-source-map",

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
