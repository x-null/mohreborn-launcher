module.exports  = {
    publicPath: process.env.NODE_ENV  ===  'production'  ?  './'  :  '/',
    pluginOptions: {
        electronBuilder: {
            preload: 'src/preload.ts',
        }
    }
}