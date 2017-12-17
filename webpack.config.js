const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/index.html`,
  filename: "index.html",
  inject: "body"
});

module.exports = {
  // 入口
  entry: ["./app/index.js"],
  // output 输出
  output: {
    path: `${__dirname}/dist`,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  // devServer 配置 webpack-dev-server 
  devServer: {
    inline: true,
    open: true,
    port: 8000
  },
  // plugins 插件
  plugins: [HTMLWebpackPluginConfig]
};
