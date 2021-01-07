module.exports = {
  chainWebpack: config => {
    if (config.plugins.store.get('prefetch')) {
      config.plugin('prefetch').tap(args => {
        args[0].fileBlacklist = [
          /\.map$/,
          /pdfmake\.[^.]+\.js$/,
          /xlsx\.[^.]+\.js$/,
          /fabric[^.]*\.[^.]+\.js$/,
          /responsivedefaults\.[^.]+\.js$/
        ]
        return args
      })
    }
  }
}
