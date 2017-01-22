
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {

    //entry :{ "scripts/libs/common" : "./src/scripts/libs/common.js"},
    entry : {"scripts/index" : "./src/scripts/index.js"},

    output : {
        path : __dirname + "/dist/",
        publicPath : "/",
        filename : "[name].js" 
    },
    externals : {
        "jquery" : "jQuery",
        "vue" : "Vue"
    },

    plugins : [
        new HtmlWebpackPlugin({
            inject : "body",
            template : "src/index.html",
            filename : "index.html",
            chunks : ["scripts/libs/common", "scripts/index"]
        }) 
    ]
};

module.exports = config;


