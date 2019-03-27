module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_shared.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('markdown-loader')
      .test(/\.md$/)
      .use('html')
        .loader('html-loader')
        .end()
      .use('markdown')
        .loader('markdown-loader')
        .options({
          gfm: true
        })
        .end()
  }
};
