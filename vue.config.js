module.exports = {
  pages: {
    demo: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: () => {
    return {
      entry: './src/components/Demo.vue',
      output: {
        filename: 'js/demo.component.js',
        library: 'demoComponent',
        libraryTarget: 'umd',
        umdNamedDefine: true
      }
    }
  }
}