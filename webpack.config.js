var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[id].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html")
    })
  ],
  devServer: {
    host: "localhost.com",
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    allowedHosts: [".localhost.com"]
  }
};
