<template>
  <div v-if="inputs !== null" class="decaon__form">
    <a-form :form="form" @submit="handleSubmit">
      <a-row :gutter="12">
        <a-col v-for="(input, key) in inputs" :key="key" class="decaon__form--container" :xs="24" :sm="inputs.length > 4 && input.type !== 'inputMonitoring' ? 12 : 24">
          <a-form-item v-if="input.type === 'input'">
            <label :for="input.data" class="decaon__form--label">
              {{ input.label }}
            </label>
            <a-input
              :id="input.data"
              v-decorator="[
                input.data,
                { rules: [{ required: input.required !== undefined ? input.required : true, message: input.message }], initialValue: data !== null ? data[input.data] : null },
              ]"
              :placeholder="input.placeholder"
              :disabled="disabled"
            />
          </a-form-item>
          <a-form-item v-if="input.type === 'date'">
            <label :for="input.data" class="decaon__form--label">
              {{ input.label }}
            </label>
            <a-date-picker
              :id="input.data"
              v-decorator="[
                input.data,
                { rules: [{ required: input.required !== undefined ? input.required : true, message: input.message }], initialValue: data !== null ? data[input.data] : null },
              ]"
              :placeholder="input.placeholder"
              :disabled="disabled"
            />
          </a-form-item>
          <a-form-item v-if="input.type === 'textarea'">
            <label :for="input.data" class="decaon__form--label">
              {{ input.label }}
            </label>
            <a-textarea
              :id="input.data"
              v-decorator="[
                input.data,
                { rules: [{ required: input.required !== undefined ? input.required : true, message: input.message }], initialValue: data !== null ? data[input.data] : null },
              ]"
              :placeholder="input.placeholder"
              :auto-size="{ minRows: 5, maxRows: 7 }"
              :disabled="disabled"
            />
          </a-form-item>
          <div v-if="input.type === 'comboBox'">
            <ComboBox
              :data="options[input.data]"
              :select="addField"
              :field="input.data"
              :required="input.required !== undefined ? input.required : true"
              :message="input.message"
              :label="input.label"
              :placeholder="input.placeholder"
              :multiple="input.multiple !== undefined ? input.multiple : false"
              :initial-value="data !== null ? map(data[input.data]) : null"
              :disabled="disabled"
            />
          </div>
          <div v-if="input.type === 'inputMonitoring'">
            <InputMonitoring :input="input" :data="data" :add-field="addField" :disabled="disabled" />
          </div>
        </a-col>
      </a-row>
      <ButtonPrimary v-if="!disabled" :text="text" :icon="null" :submit="true" />
    </a-form>
  </div>
</template>

<script>
import _ from 'lodash'
import ComboBox from '@/components/atoms/ComboBox'
import InputMonitoring from '@/components/atoms/InputMonitoring'
import ButtonPrimary from '@/components/atoms/ButtonPrimary'
export default {
  components: {
    ButtonPrimary,
    ComboBox,
    InputMonitoring
  },
  props: {
    inputs: {
      type: Array,
      default: null
    },
    options: {
      type: Object,
      default: null
    },
    data: {
      type: Object,
      default: null
    },
    text: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'create'
    },
    submit: {
      type: Function,
      default: (values) => {}
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    addField (key, value) {
      this.form.setFieldsValue({
        key: value
      })
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          if (this.mode === 'create') {
            this.submit(values)
          } else {
            this.submit({ ...values, id: this.data.id })
          }
        }
      })
    },
    map (value) {
      if (value !== undefined && value !== '') {
        if (_.isArray(value)) {
          return _.map(value, item => item.id)
        }
        return [value.id !== undefined ? value.id : value]
      } else {
        return []
      }
    }
  }
}
</script>
