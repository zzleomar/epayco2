<template>
  <div v-if="inputs !== null" class="epayco2__form">
    <a-form :form="form" @submit="handleSubmit">
      <a-row :gutter="12">
        <a-col v-for="(input, key) in inputs" :key="key" class="epayco2__form--container" :xs="24" :sm="inputs.length > 4 && input.type !== 'inputMonitoring' ? 12 : 24">
          <a-form-item v-if="input.type === 'input'">
            <label :for="input.data" class="epayco2__form--label">
              {{ input.label }}
            </label>
            <a-input
              :id="input.data"
              v-decorator="[
                input.data,
                { rules: [{ required: input.required !== undefined ? input.required : true, message: input.message },{
                  type: input.email ? 'email' : undefined,
                  message: input.message
                }] },
              ]"
              :placeholder="input.placeholder"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <ButtonPrimary :text="textButton" :icon="null" :submit="true" />
    </a-form>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/atoms/ButtonPrimary'
export default {
  components: {
    ButtonPrimary
  },
  props: {
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
  },
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.submit(values)
        }
      })
    }
  }
}
</script>
