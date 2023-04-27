const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const InlineChunkHtmlPlugin = require("inline-chunk-html-plugin"); // Agrega esta línea
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    // ui: "./ui.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./ui.html",
      filename: "ui.html",
      chunks: ["ui"],
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/ui/]), // Agrega esta línea
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "code.js",
          to: "code.js",
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
