// 定义一个函数，用来将组件库目录下的文件名称及路径便利出来
const fs = require("fs");
const path = require("path");
const rootDir = path.resolve(__dirname, "./");
const componentDir = "src/components";
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
console.log(rootDir);
const cModuleMap = cModuleNames.reduce((prev, name) => {
  prev[name] = path.join(rootDir, `${componentDir}/${name}/index.js`);

  return prev;
}, {});

// wenpack configuration
module.exports = {
  devtool: "source-map",
  entry: {
    index: "./src/components/index.js"
  },
  mode: "production",
  module: {
    rules: [
      { test: /\.js|jsx$/, exclude: /node_modules/, loader: 
        "babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0" }
    ]
  },
  output: {
    path: path.resolve(__dirname, "src"), // 要输出多文件这里就要配置输出目录而不是当个文件
    filename: "index.js",
    // output.library 和 output.libraryTarget 一起使用 对外暴露 library 及定义输出组件库格式
    library: ["xxx-components", "[name]"],
    libraryTarget: "umd",
    publicPath: "/"
  }
};
