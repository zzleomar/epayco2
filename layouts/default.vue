<template>
  <a-layout class="layout">
    <a-layout-header>
      <Nav :items="items" />
    </a-layout-header>
    <a-layout-content style="padding: 0">
      <Nuxt />
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
      items: [
        {
          text: 'Nuevo usuario',
          link: '/register'
        },
        {
          text: 'Recargar',
          link: '/recharge'
        },
        {
          text: 'Consultar',
          link: '/query'
        }
      ]
    }
  }
}
</script>
