<script>
import PageLayout from '~/pages/PageLayout.vue'
export default {
  name: 'AgreementView',
  components: { PageLayout },
  data() {
    return {
      breadcrumbs: [
        { text: 'Гравная страница', link: '/' },
        { text: 'Документы', link: '/' },
        { text: 'Лицензионный договор' }
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