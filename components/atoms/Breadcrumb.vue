<template>
  <div>
    <a-breadcrumb v-if="items !== null" class="epayco2__breadcrumb">
      <a-breadcrumb-item v-for="(item, key) in items" :key="key">
        {{ item }}
      </a-breadcrumb-item>
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
  }
}
</script>

<style lang="scss" scoped>

</style>
