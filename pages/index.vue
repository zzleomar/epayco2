<template>
  <div>
    <Breadcrumb :items="null" />
    <Home />
  </div>
</template>

<script>
import Breadcrumb from '@/components/atoms/Breadcrumb'
import Home from '@/components/organisms/Home'
export default {
  components: {
    Breadcrumb,
    Home
  }
}
</script>
