<template>
  <a-layout class="layout">
    <a-layout-header>
      <Nav :items="items" />
    </a-layout-header>
    <a-layout-content style="padding: 0">
      <a-spin tip="Loading..." :spinning="spinning" :delay="delayTime">
        <Nuxt />
      </a-spin>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Epayco2 ©2021 Created by Leomar Esparragoza
    </a-layout-footer>
  </a-layout>
</template>
<script>
import Nav from '@/components/molecules/Nav'
export default {
  components: {
    Nav
  },
  data () {
    return {
      delayTime: 500,
      items: [
        {
          text: 'Nuevo usuario',
          link: 'register'
        },
        {
          text: 'Recargar',
          link: 'recharge'
        },
        {
          text: 'Consultar',
          link: 'query'
        },
        {
          text: 'Factura',
          link: 'invoice'
        }
      ]
    }
  },
  computed: {
    spinning () {
      return this.$store.state.notification.spinning
    }
  }
}
</script>
