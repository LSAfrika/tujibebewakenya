const path =require('path')

module.exports ={
    mode:'development',
    entry: './index/app.js',
    output:{
        path: path.resolve(__dirname,'index'),
        filename:'bundle.js'
    },
    watch:true
}