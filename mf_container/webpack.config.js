const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const DotEnvPlugin = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    static: { directory: path.join(__dirname, "dist") },
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
        test: /\.(ttf|woff|woff2)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              outputPath: "images",
              publicPath: "images",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "head",
    }),
    // new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: "BFF",
      remotes: {
        MfVideosApp: "MfVideosApp@http://localhost:3001/remoteEntry.js",
        MfDrawerApp: "MfDrawerApp@http://localhost:3002/remoteEntry.js",
      },
    }),
    // new DotEnvPlugin(),
  ],
};
