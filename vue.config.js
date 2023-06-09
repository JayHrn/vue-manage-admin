// module.exports = {
//     baseUrl: './',
//     assetsDir: 'static',
//     productionSourceMap: false
//     // devServer: {
//     //     proxy: {
//     //         '/api':{
//     //             target:'http://jsonplaceholder.typicode.com',
//     //             changeOrigin:true,
//     //             pathRewrite:{
//     //                 '/api':''
//     //             }
//     //         }
//     //     }
//     // }
// };
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false
})
