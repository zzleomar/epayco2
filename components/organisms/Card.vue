<template>
  <div class="epayco__card">
    <a-card :title="title" :bordered="false">
      <FormTemplate :inputs="inputs" :text-button="textButton" :submit="submit" />
    </a-card>
  </div>
</template>

<script>
import FormTemplate from '@/components/molecules/FormTemplate.vue'
export default {
  components: {
    FormTemplate
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    inputs: {
      type: Array,
      default: null
    },
    textButton: {
      type: String,
      default: ''
    },
    submit: {
      type: Function,
      default: (values) => {}
    }
  }
}
</script>
