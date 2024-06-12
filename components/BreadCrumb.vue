<script>
export default {
  name: 'BreadCrumb',
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ul class="breadcrumb regular">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="breadcrumb-item">
        <RouterLink
          v-if="crumb.link"
          :to="crumb.link"
          class="breadcrumb-link"
          active-class="active-breadcrumb"
          exact-active-class="active-breadcrumb"
        >
          {{ crumb.text }}
        </RouterLink>
        <span v-else class="breadcrumb-link active-breadcrumb">{{ crumb.text }}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav{
  margin: 18px 12px 3px 12px;
}
.breadcrumb {
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 10px 0;
}

.breadcrumb-item {
  color: black;
  font-size: 13px;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: '•';
  margin: 0 5px 0 1px;
  font-size: 14px;
  color: black;
}
.breadcrumb-link {
  color: black;
  text-decoration: none;
}
.breadcrumb-link.active-breadcrumb {
  color: #8F8F8F !important;
}
</style>