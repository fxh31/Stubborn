// 打包模块

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

// 使用正则读取文件模块
const glob = require('glob');
const list = {};

// {
//   card: './components/lib/card/index.js',
//   demo: './components/lib/demo/index.js'
// }
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  console.log('files:', files);
  for (let file of files) {
    // 以/ .进行切分，打印切分后的第三个元素
    const component = file.split(/[/.]/)[2];
    console.log('component:', component);
    list[component] = `./${file}`;
  }
  console.log(list);
}

makeList('components/lib', list)

module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, 'dist'),// 修改为绝对地址
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  }
};