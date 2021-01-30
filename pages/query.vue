<template>
  <div>
    <Breadcrumb :items="routes" />
    <Card title="Formulario de cosulta" :inputs="inputs" :submit="handleSubmit" text-button="Consultar" />
  </div>
</template>

<script>
// import { Modal } from 'ant-design-vue'
import { mapActions } from 'vuex'
import Card from '@/components/organisms/Card.vue'
export default {
  components: {
    Card
  },
  data () {
    return {
      routes: [
        {
          path: '',
          breadcrumbName: 'Home'
        },
        {
          path: '/query',
          breadcrumbName: 'Consulta'
        }
      ],
      inputs: [
        {
          label: 'Documento',
          data: 'document',
          type: 'input',
          placeholder: 'Ingrese DNI/CI ó PASA PORTE',
          message: 'Debe ingresar un documento de identidad',
          required: true
        },
        {
          label: 'Celular',
          data: 'phone',
          type: 'input',
          placeholder: 'Ingreseun Nro. Celular',
          message: 'Debe ingresar un numero celular ejemplo +584121233421',
          required: true,
          validator: 'phone'
        }
      ]
    }
  },
  methods: {
    ...mapActions('account', ['createAccount', 'query']),
    ...mapActions('notification', ['showNotification']),
    handleSubmit (payload) {
      const self = this
      this.query({ payload, self }).then((response) => {
        self.modalInfo(self, response)
      }).catch((err) => {
        console.log(err, 'err')
        if (err.message) {
          self.showNotification({ menssage: err.message, type: 'warning', self })
        } else {
          self.showNotification({ menssage: 'Ocurrio un error inesperado', type: 'warning', self })
        }
      })
    },
    modalInfo (self, response) {
      const h = this.$createElement
      this.$success({
        title: 'Resultado de la consulta',
        content: h('div', {}, [
          h('p', {}, [
            h('span', 'Nombre: '),
            h('b', `${response.user.fullName}`)
          ]),
          h('p', {}, [
            h('span', 'Documento: '),
            h('b', `${response.user.document}`)
          ]),
          h('p', {}, [
            h('span', 'Celular: '),
            h('b', `${response.user.phone}`)
          ]),
          h('p', {}, [
            h('span', 'Tu saldo es: '),
            h('b', `${response.balance}$`)
          ])
        ]),
        onOk () { self.$router.push('/') }
      })
    }
  }
}
</script>
