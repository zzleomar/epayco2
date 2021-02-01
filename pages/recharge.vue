<template>
  <div>
    <Breadcrumb :items="routes" />
    <Card title="Formulario de recarga" :inputs="inputs" :submit="handleSubmit" text-button="Depositar" />
  </div>
</template>

<script>
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
          path: '/recharge',
          breadcrumbName: 'Recarga'
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
        },
        {
          label: 'Monto',
          data: 'amount',
          type: 'number',
          placeholder: 'Ingrese el monto',
          message: 'Debe ingresar un monto mayor que 0',
          required: true
        }
      ]
    }
  },
  methods: {
    ...mapActions('account', ['recharge']),
    ...mapActions('notification', ['showNotification']),
    handleSubmit (payload) {
      const self = this
      this.recharge({ payload, self }).then((response) => {
        self.showNotification({ menssage: `${response.user.fullName} tu recarga fue procesada, Saldo actual ${response.balance}`, type: 'success', self })
        self.$router.push('/')
      }).catch((err) => {
        console.log(err, 'err')
        if (err.message) {
          self.showNotification({ menssage: err.message, type: 'warning', self })
        } else {
          self.showNotification({ menssage: 'Ocurrio un error inesperado', type: 'warning', self })
        }
      })
    }
  }
}
</script>
