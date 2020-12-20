const { load } = require('./controller')

const Component = {
  render () {
    // eslint-disable-next-line
    const _vm = this
    return _vm.$createElement(_vm.defaultComponent,
      {
        tag: 'component',
        props: Object.assign({}, _vm.$attrs, _vm.$props),
        on: this.$listeners,
        // eslint-disable-next-line
        scopedSlots: _vm._u(
          Object.keys(_vm.$scopedSlots || {}).map(slotName => ({
            key: slotName,
            fn (scope) {
              // eslint-disable-next-line
              return _vm._t(slotName, null, {
                data: scope.data
              })
            }
          })),
          this.$slots.default,
          true
        )
      })
  },
  created () {
    this.$nextTick(async () => {
      try {
        const widget = await load(this.url)
        const componentName = `widget-${widget.name}`
        this.$options.components[componentName] = widget.component
        this.defaultComponent = componentName
      } catch (err) {
        console.error(`加载widget-weex:${this.url} 异常`, err)
      }
    })
  },
  components: {
  },
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      defaultComponent: 'div'
    }
  }
}

module.exports = Component
