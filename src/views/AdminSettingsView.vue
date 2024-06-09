<script setup>
import AdminNavigation from '../components/layout/AdminNavigation.vue'
</script>

<template>
  <AdminNavigation/>
  Settings
</template>

<script>
export default {
  emits: [
    'refreshAuth'
  ],
}
</script>