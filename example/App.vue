<template>
  <div>
    <component :is="componentName" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      componentName: 'div'
    }
  },
  methods: {
    async loadDynamic() {
      const res = await axios.get('js/demo.component.js')
      eval(res.data)
      const DemoComponent = window.commonComponent.default
      return { name: DemoComponent.name || 'Demo', component: DemoComponent }
    },
    async dynamicComponentRender() {
      const { name, component } = await this.loadDynamic()
      this.$options.components[name] = component
      this.componentName = name
    }
  },
  async mounted() {
    this.dynamicComponentRender()
  }
}
</script>