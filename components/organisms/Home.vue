<template>
  <div class="epayco2__home">
    <a-row>
      <a-col>
        <h1 class="epayco2__home--h1">
          Seguridad y Confianza a tu alcance
        </h1>
      </a-col>
      <a-col>
        <ButtonPrimary text="Registrate" :click="handleClick" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ButtonPrimary from '@/components/atoms/ButtonPrimary.vue'
export default {
  components: {
    ButtonPrimary
  },
  methods: {
    handleClick () {
      this.$router.push('/register')
    }
  }
}
</script>
