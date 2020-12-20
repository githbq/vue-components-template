<template>
  <component :is="defaultComponent" v-show="defaultComponent !== 'div'" />
</template>

<script>
import axios from 'axios'
export default {
  name: 'mPaaS-Widget',
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return { defaultComponent: 'div' }
  },
  created() {
    this.dynamicComponentRender()
  },
  methods: {
    execute(jsContent) {
      eval(jsContent)
    },
    async loadDynamic() {
      const res = await axios.get(this.url)
      this.execute(res.data)
      const component = window.XDinamicCommonComponent.default
      return {
        name: 'XDynamicComponent-' + (component.name || 'temp'),
        component
      }
    },
    async dynamicComponentRender() {
      const { name, component } = await this.loadDynamic()
      this.$options.components[name] = component
      this.defaultComponent = name
    }
  }
}
</script>
