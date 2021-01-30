<template>
  <div>
    <Breadcrumb :items="routes" />
    <Card title="Registro de usuarios" :inputs="inputs" :submit="handleSubmit" text-button="Registrar" />
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
          path: '/register',
          breadcrumbName: 'Registro'
        }
      ],
      inputs: [
        {
          label: 'Nombre',
          data: 'fullName',
          type: 'input',
          placeholder: 'Ingrese su nombre completo',
          message: 'Debe ingresar su nombre completo',
          required: true
        },
        {
          label: 'Documento',
          data: 'document',
          type: 'input',
          placeholder: 'Ingrese DNI/CI ó PASA PORTE',
          message: 'Debe ingresar un documento de identidad',
          required: true
        },
        {
          label: 'Email',
          data: 'email',
          type: 'input',
          placeholder: 'Ingrese su correo electrónico',
          message: 'Debe ingresar una dirección de correo valido',
          required: true,
          email: true
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
    ...mapActions('account', ['createAccount']),
    ...mapActions('notification', ['showNotification']),
    handleSubmit (payload) {
      const self = this
      this.createAccount({ payload, self }).then((response) => {
        self.showNotification({ menssage: 'Usuario registrado con éxito', type: 'success', self })
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
