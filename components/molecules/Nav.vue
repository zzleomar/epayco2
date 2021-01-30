<template>
  <div>
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="[]"
      :style="{ lineHeight: '64px' }"
      @click="handleMenu"
    >
      <a-menu-item v-for="(item, key) in items" :key="key">
        {{ item.text }}
      </a-menu-item>
    </a-menu>
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
