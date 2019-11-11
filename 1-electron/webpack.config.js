const webpack = require("webpack");
const path = require("path");

// variables
const isProduction =
  process.argv.indexOf("-p") >= 0 || process.env.NODE_ENV === "production";
const sourcePath = path.join(__dirname, "./src");
const outPath = path.join(__dirname, "./build");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");

module.exports = {
  context: sourcePath,
  entry: {
    app: "./index.js"
  },
  output: {
    path: outPath,
    filename: "bundle.js",
    chunkFilename: "[chunkhash].js",
    publicPath: isProduction ? "" : "/"
  },
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        use: [
          !isProduction && {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              plugins: ["react-hot-loader/babel"]
            }
          },
          "babel-loader",
          "eslint-loader"
        ].filter(Boolean)
      },
      {
        test: /^((?!\.global).)*(s)?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /.global.(s)?css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      { test: /\.html$/, use: "html-loader" },
      { test: /\.(a?png|svg)$/, use: "url-loader?limit=10000" },
      {
        test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
        use: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"] // to resolve .js or .jsx file without having to specify the extension in imports
  },
  externals: {
    "nfc-pcsc": "require('nfc-pcsc')"
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: -10
        }
      }
    },
    runtimeChunk: true
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new WebpackCleanupPlugin(),
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
      disable: !isProduction
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    stats: "minimal",
    clientLogLevel: "warning"
  },
  devtool: isProduction ? "hidden-source-map" : "cheap-module-eval-source-map"
};
