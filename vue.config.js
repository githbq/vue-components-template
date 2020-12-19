module.exports = {
  pages: {
    demo: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: (config) => {
    console.log('config.entry', config.entry)
    config.entry['demo.component'] = './src/components/Demo.vue' 
    config.output = {
      filename: 'js/demo.component.js',
      library: 'commonComponent',
      libraryTarget: 'umd',
      umdNamedDefine: true
    }
    // return {
    //   entry: './src/components/Demo.vue',
    //   output: {
    //     filename: 'js/demo.component.js',
    //     library: 'demoComponent',
    //     libraryTarget: 'umd',
    //     umdNamedDefine: true
    //   }
    // }
  }
}