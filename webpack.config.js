var path  = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

var DIST_DIR = path.resolve(__dirname,"src/public");
var SRC_DIR = path.resolve(__dirname,"src");

module.exports = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR ,
    filename: "js/bundle.js",

  },

  module: {
      rules: [
            {    test: /\.js$/,
                 include:SRC_DIR,
                 loader: "babel-loader",
                 query: {
                presets: ["react", "es2015", "stage-2"]
             }
           },
           {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          camelCase: true,
          sourceMap: true
        }
      }
    ]
  },
 {
   test: /\.(png|jpg)$/,
    loader: 'url-loader?limit=8192'
   }
    /*    {   test:/\.css$/,
           use: [
             {loader: "style-loader"},
             {loader: "css-loader"}
           ]}*/

    /*   {     test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:["css-loader"]
                })
          }*/
       ]
     },
  /*  plugins: [
       new ExtractTextPlugin({filename: "styles.css"})
     ]*/
};
