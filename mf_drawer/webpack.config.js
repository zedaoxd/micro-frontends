const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3002/",
  },
  devServer: {
    compress: true,
    port: 3002,
    hot: true,
    static: { directory: path.join(__dirname, "public") },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "MfDrawerApp",
      filename: "remoteEntry.js",
      exposes: {
        "./MfDrawer": "./src/index",
      },
    }),
  ],
};
