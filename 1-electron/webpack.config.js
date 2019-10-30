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
  entry: ["@babel/polyfill", "./index.jsx"],
  output: {
    path: outPath,
    filename: "[name].[hash].js",
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
        exclude: [/node_modules/],
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
              sourceMap: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /(s)?css$/,
        include: [/node_modules/],
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: false } }
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
      {
        test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf|otf|eot)$/i,
        loader: "file-loader",
        options: {
          name: isProduction ? "[contenthash].[ext]" : "[name].[ext]"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"] // to resolve .js or .jsx file without having to specify the extension in imports
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
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
      template: "./index.html",
      favicon: "./resources/favicon.ico"
    })
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: "minimal",
    clientLogLevel: "warning"
  },
  devtool: isProduction ? "hidden-source-map" : "eval-source-map"
};
