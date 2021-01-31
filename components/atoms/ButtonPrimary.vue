<template>
  <div class="epayco2__button">
    <a-button type="primary" :html-type="submit ? 'submit' : 'button'" @click="click">
      {{ text }}
      <a-icon v-if="icon !== null" :type="icon" :theme="theme" class="epayco2__button--icon" />
    </a-button>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    theme: {
      type: String,
      default: 'filled'
    },
    text: {
      type: String,
      default: null
    },
    click: {
      type: Function,
      default: () => {}
    },
    submit: {
      type: Boolean,
      default: false
    }
  }
}
</script>
