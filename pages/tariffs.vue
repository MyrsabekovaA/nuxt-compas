<script>
import PageLayout from '~/pages/PageLayout.vue'
export default {
  name: 'TariffsView',
  components: { PageLayout },
  data() {
    return {
      breadcrumbs: [
        { text: 'Гравная страница', link: '/' },
        { text: 'Тарифы' }
      ]
    }
  }
}
</script>

<template>
  <PageLayout :breadcrumbs="breadcrumbs">

  </PageLayout>
</template>

<style scoped>

</style>