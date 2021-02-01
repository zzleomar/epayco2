<template>
  <div>
    <Breadcrumb :items="routes" />
    <transition
      name="page"
      mode="out-in"
    >
      <div v-if="step == 1" key="requestPayment">
        <Card title="Formulario de Pago" :inputs="inputs" :submit="handleSubmit" text-button="Pagar" />
      </div>
      <div v-else key="confirm">
        <Card title="Confirmación de seguridad" :inputs="inputs2" :submit="handleSubmit" text-button="Confirmar" />
      </div>
    </transition>
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
      step: 1,
      routes: [
        {
          path: '',
          breadcrumbName: 'Home'
        },
        {
          path: '/invoice',
          breadcrumbName: 'Factura'
        }
      ],
      inputs2: [
        {
          label: 'Token',
          data: 'token',
          type: 'input',
          placeholder: 'Ingrese el token de verificación enviado a su correo',
          message: 'Debe ingresar token',
          required: true
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
    ...mapActions('pay', ['requestPayment', 'confirm']),
    ...mapActions('notification', ['showNotification']),
    handleSubmit (payload) {
      const self = this
      if (this.step === 1) {
        this.requestPayment({ payload, self }).then((response) => {
          self.showNotification({ menssage: `${response.user.fullName} Se ha enviado un correo electrónico con el código de verificación`, type: 'success', self })
          self.step = 2
        }).catch((err) => {
          console.log(err, 'err')
          if (err.message) {
            self.showNotification({ menssage: err.message, type: 'warning', self })
          } else {
            self.showNotification({ menssage: 'Ocurrio un error inesperado', type: 'warning', self })
          }
        })
      } else {
        this.confirm({ payload, self }).then((response) => {
          self.showNotification({ menssage: `${response.user.fullName} tu factura fue procesada, Saldo actual ${response.balance}`, type: 'success', self })
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
}
</script>
