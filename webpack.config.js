
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {

    //entry :{ "scripts/libs/common" : "./src/scripts/libs/common.js"},
    entry : {"scripts/index" : "./src/scripts/index.js" , "style/index" : './src/styles/index.scss'},

    output : {
        path : __dirname + "/dist/",
        publicPath : "/asset",
        filename : "[name].js" 
    },
    externals : {
        "jquery" : "jQuery",
        "vue" : "Vue"
    },

    module : {
        loaders: [
            { test: /\.scss$/, loader: "sass-loader" }
        ]
    
    }

    plugins : [
        new HtmlWebpackPlugin({
            inject : "body",
            template : "src/index.html",
            filename : "index.html",
            chunks : ["scripts/index"]
        }) 
    ]
};

module.exports = config;


