<template>
  <div>
    <a-breadcrumb v-if="items !== null" class="epayco2__breadcrumb" :routes="items">
      <template slot="itemRender" slot-scope="{route, routes, paths}">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="paths.join('/') === '' ? '/' : paths.join('/')">
          {{ route.breadcrumbName }}
        </router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  methods: {
    handleMenu (data) {
      console.log(this.items[data.key])
      this.$router.push(this.items[data.key].link)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
