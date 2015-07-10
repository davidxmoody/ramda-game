module.exports =
  entry: "./src/index.coffee"
  output:
    path: "./build"
    publicPath: "/"
    filename: "index.js"
  module:
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" }
      { test: /\.cjsx/, loader: "coffee-loader!cjsx-loader" }
    ]
  resolve:
    extensions: ["", ".js", ".coffee"]
