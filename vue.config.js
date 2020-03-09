const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: "./",
    css: {
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            less: {
                javascriptEnabled: true
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    }
}