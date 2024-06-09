<script setup>
import Login from '../components/auth/Login.vue';
import { RouterView } from 'vue-router';
import { usePocketBase } from '../composables/usePocketBase';
</script>

<template>
  <main class="w-100">
    <v-sheet class="bg-grey-darken-4 pa-6 border-surface-bright border-sm rounded-lg" rounded>
      <Login v-if="!pb?.authStore.isValid" @refreshAuth="refreshAuthView"/>
      <RouterView v-else @refreshAuth="refreshAuthView"/>
    </v-sheet>
  </main>
</template>

<script>
export default {
    data() {
      return {
        pb: null
      }
    },
    async created() {
        return this.refreshAuthView();
    },
    methods: {
      async refreshAuthView() {
        this.pb = await usePocketBase();
      }
    }
}
</script>