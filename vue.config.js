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
    console.log('config.output',config.output)
    config.output = {
      ...config.output,
      filename: 'js/[name].js',
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