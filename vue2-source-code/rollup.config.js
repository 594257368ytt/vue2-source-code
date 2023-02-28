// rollup默认导出一个对象，作为打包的配置文件
import babel from 'rollup-plugin-babel'
export default {
    input: "./src/index.js", // 打包入口文件
    output: {
        file:'./dist/vue.js', // 出口
        name: 'Vue',
        format:'umd', //打包格式，esm, es6模块 commonjs模块 
        sourcemap: true  //希望可以调试源代码
    },
    plugins:[
        babel({
            // 直接建一个配置文件写配置，也可以写在这里
            exclude: 'node_modules/**'
        })
    ]
}