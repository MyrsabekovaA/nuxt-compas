<script>
import PageLayout from '~/pages/PageLayout.vue'
export default {
  name: 'ContactsView',
  components: { PageLayout },
  data() {
    return {
      breadcrumbs: [
        { text: 'Гравная страница', link: '/' },
          { text: 'Контакты' }
      ]
    }
  }
}
</script>

<template>
  <PageLayout :breadcrumbs="breadcrumbs">
    <div>
      <h1>Контакты</h1>

    </div>
  </PageLayout>
</template>

<style scoped>

</style>